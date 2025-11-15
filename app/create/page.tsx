"use client";

import ContentInput from "@/components/ContentInput";
import Button from "@/components/Button";
import GeneratedPosts from "@/components/GeneratedPosts";
import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { generatePosts } from "@/services/apiService";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "twitter",
    "linkedin",
    "instagram",
  ]);
  const [generatedPosts, setGeneratedPosts] = useState<Record<
    string,
    string
  > | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedPosts(null);

    try {
      const data = await generatePosts({
        title,
        content,
        platforms: selectedPlatforms,
      });
      setGeneratedPosts(data.posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Create Your Social Posts
          </h1>
          <p className="text-lg text-gray-600">
            Paste your content and let AI transform it into platform-optimized
            posts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <ContentInput
                title={title}
                content={content}
                selectedPlatforms={selectedPlatforms}
                onTitleChange={setTitle}
                onContentChange={setContent}
                onPlatformsChange={setSelectedPlatforms}
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Button
                variant="primary"
                onClick={handleGenerate}
                className="text-lg px-8 py-4 flex items-center space-x-2 w-full sm:w-auto"
                disabled={
                  !content.trim() || selectedPlatforms.length === 0 || isLoading
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Posts</span>
                  </>
                )}
              </Button>

              {(!content.trim() || selectedPlatforms.length === 0) &&
                !isLoading && (
                  <p className="text-center text-gray-500 text-sm">
                    {!content.trim()
                      ? "Please add your content to continue"
                      : "Please select at least one platform"}
                  </p>
                )}

              {error && (
                <div className="w-full bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Generated Posts */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {generatedPosts ? (
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <GeneratedPosts posts={generatedPosts} />
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium mb-2">
                  Generated posts will appear here
                </p>
                <p className="text-gray-400 text-sm">
                  Fill out the form and click "Generate Posts" to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
