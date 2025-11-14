"use client";

import ContentInput from "@/components/ContentInput";
import Button from "@/components/Button";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "twitter",
    "linkedin",
    "instagram",
  ]);

  const handleGenerate = () => {
    // TODO: Implement AI generation logic
    console.log("Generating posts for:", {
      title,
      content,
      platforms: selectedPlatforms,
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Create Your Social Posts
          </h1>
          <p className="text-lg text-gray-600">
            Paste your content and let AI transform it into platform-optimized
            posts
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <ContentInput
            title={title}
            content={content}
            selectedPlatforms={selectedPlatforms}
            onTitleChange={setTitle}
            onContentChange={setContent}
            onPlatformsChange={setSelectedPlatforms}
          />
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={handleGenerate}
            className="text-lg px-8 py-4 flex items-center space-x-2"
            disabled={!content.trim() || selectedPlatforms.length === 0}
          >
            <Sparkles className="h-5 w-5" />
            <span>Generate Posts</span>
          </Button>
        </div>

        {(!content.trim() || selectedPlatforms.length === 0) && (
          <p className="text-center text-gray-500 text-sm mt-4">
            {!content.trim()
              ? "Please add your content to continue"
              : "Please select at least one platform"}
          </p>
        )}
      </div>
    </div>
  );
}
