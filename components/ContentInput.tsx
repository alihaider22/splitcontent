"use client";

import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

interface ContentInputProps {
  title?: string;
  content?: string;
  selectedPlatforms?: string[];
  onTitleChange?: (title: string) => void;
  onContentChange?: (content: string) => void;
  onPlatformsChange?: (platforms: string[]) => void;
}

export default function ContentInput({
  title: initialTitle = "",
  content: initialContent = "",
  selectedPlatforms: initialPlatforms = ["twitter", "linkedin", "instagram"],
  onTitleChange,
  onContentChange,
  onPlatformsChange,
}: ContentInputProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [platforms, setPlatforms] = useState<string[]>(
    initialPlatforms.length > 0
      ? initialPlatforms
      : ["twitter", "linkedin", "instagram"]
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onTitleChange?.(newTitle);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    onContentChange?.(newContent);
  };

  const handlePlatformToggle = (platform: string) => {
    const newPlatforms = platforms.includes(platform)
      ? platforms.filter((p) => p !== platform)
      : [...platforms, platform];
    setPlatforms(newPlatforms);
    onPlatformsChange?.(newPlatforms);
  };

  return (
    <div className="space-y-6">
      {/* Title Input */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a title for your content"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
        />
      </div>

      {/* Content Input */}
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Paste your blog post, newsletter, transcript, or any long-form content here..."
          rows={12}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-y text-gray-900 placeholder:text-gray-400"
        />
      </div>

      {/* Platform Checkboxes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Platforms
        </label>
        <div className="flex flex-wrap gap-4">
          {/* Twitter Checkbox */}
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={platforms.includes("twitter")}
              onChange={() => handlePlatformToggle("twitter")}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600 cursor-pointer"
            />
            <div className="flex items-center space-x-2">
              <Twitter className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                Twitter
              </span>
            </div>
          </label>

          {/* LinkedIn Checkbox */}
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={platforms.includes("linkedin")}
              onChange={() => handlePlatformToggle("linkedin")}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600 cursor-pointer"
            />
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                LinkedIn
              </span>
            </div>
          </label>

          {/* Instagram Checkbox */}
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={platforms.includes("instagram")}
              onChange={() => handlePlatformToggle("instagram")}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-600 cursor-pointer"
            />
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                Instagram
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
