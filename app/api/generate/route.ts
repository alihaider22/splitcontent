import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";
import { CreatePostData } from "@/types/database";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, content, platforms } = await request.json();

    if (!content || !platforms || platforms.length === 0) {
      return NextResponse.json(
        { error: "Content and platforms are required" },
        { status: 400 }
      );
    }

    // Create platform-specific prompts
    const platformPrompts: Record<string, string> = {
      twitter:
        "Create a captivating Twitter/X post that hooks readers instantly. Use a punchy opening line, add personality and wit, strategically use 1-2 emojis if they enhance the message (don't overdo it), include 2-3 strategic hashtags, and keep it under 280 characters. Make it shareable and conversation-starting. Write only the post text, no labels or explanations.",
      linkedin:
        "Create a compelling LinkedIn post that tells a story and adds value. Start with a thought-provoking hook, share insights or lessons learned, use a professional yet conversational tone, strategically add 1-2 emojis if they add warmth or emphasis (keep it professional), include a call-to-action or question to spark engagement, and format with line breaks for readability. Write only the post text, no labels.",
      instagram:
        "Create an Instagram caption that's visually descriptive and emotionally engaging. Start with an attention-grabbing first line, tell a story or share insights, use emojis strategically throughout (3-5 emojis that enhance the message), and end with 5-7 relevant hashtags. Make it authentic and relatable. Write only the caption text, no labels.",
    };

    // Generate posts for each selected platform
    const posts: Record<string, string> = {};

    for (const platform of platforms) {
      const platformPrompt =
        platformPrompts[platform] || "Create a social media post.";

      const prompt = `You are a social media content creator. Based on the following content, ${platformPrompt}

Content Title: ${title || "Untitled"}
Content: ${content}

Generate the post now:`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a world-class social media content creator with expertise in viral content, storytelling, and platform-specific optimization. You create posts that are authentic, engaging, and designed to maximize reach and engagement. Your writing style is fresh, modern, and adapts perfectly to each platform's unique culture and audience expectations. You strategically use emojis to add personality, emotion, and visual appeal when they enhance the message, but never overuse them. Each emoji should serve a purpose and feel natural.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        temperature: 0.8,
      });

      posts[platform] = completion.choices[0]?.message?.content?.trim() || "";
    }

    // Save to Supabase
    const supabase = createSupabaseClient();
    const postData: CreatePostData = {
      user_id: userId,
      title: title || "Untitled",
      original_content: content,
      posts: posts,
      platforms: platforms,
    };

    const { data: savedPost, error: dbError } = await supabase
      .from("generated_posts")
      .insert([postData])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      // Still return the posts even if saving fails
      return NextResponse.json({
        posts,
        saved: false,
        error: "Posts generated but failed to save to history",
      });
    }

    return NextResponse.json({
      posts,
      saved: true,
      postId: savedPost.id,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to generate posts. Please try again.";

    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage =
          "Invalid OpenAI API key. Please check your environment variables.";
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Rate limit exceeded. Please try again in a moment.";
      } else if (error.message.includes("insufficient_quota")) {
        errorMessage =
          "OpenAI API quota exceeded. Please check your account billing.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
