"use client";

import { Copy, Check, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import Card from "./Card";

interface GeneratedPostsProps {
  posts: Record<string, string>;
}

export default function GeneratedPosts({ posts }: GeneratedPostsProps) {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);

  const platformIcons: Record<string, React.ReactNode> = {
    twitter: <Twitter className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  };

  const platformNames: Record<string, string> = {
    twitter: "Twitter",
    linkedin: "LinkedIn",
    instagram: "Instagram",
  };

  const handleCopy = async (platform: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPlatform(platform);
      setTimeout(() => setCopiedPlatform(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Generated Posts</h2>
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(posts).map(([platform, post]) => (
          <Card key={platform}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="text-teal-400">{platformIcons[platform]}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {platformNames[platform]}
                </h3>
              </div>
              <button
                onClick={() => handleCopy(platform, post)}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-teal-400 hover:bg-teal-50 rounded-lg transition-colors"
              >
                {copiedPlatform === platform ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-wrap">{post}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
