"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserHistory } from "@/services/historyService";
import { GeneratedPost } from "@/types/database";
import GeneratedPosts from "@/components/GeneratedPosts";
import { Loader2, Calendar, FileText } from "lucide-react";
import Card from "@/components/Card";

export default function HistoryPage() {
  const { isSignedIn, isLoaded } = useUser();
  const [history, setHistory] = useState<GeneratedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<GeneratedPost | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      redirect("/sign-in?redirect_url=/history");
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchHistory();
    }
  }, [isLoaded, isSignedIn]);

  const fetchHistory = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getUserHistory();
      if (data.error) {
        setError(data.error);
      } else {
        setHistory(data.posts);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load history");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Post History
          </h1>
          <p className="text-lg text-gray-600">
            View and manage all your previously generated social media posts
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800">{error}</p>
          </div>
        ) : history.length === 0 ? (
          <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-medium mb-2">
              No posts yet
            </p>
            <p className="text-gray-400 text-sm">
              Start creating posts to see them here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - History List */}
            <div className="lg:col-span-1 space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto p-2">
              {history.map((post) => (
                <Card
                  key={post.id}
                  className={`cursor-pointer transition-all ${
                    selectedPost?.id === post.id
                      ? "ring-2 ring-blue-600 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Side - Selected Post Details */}
            <div className="lg:col-span-2">
              {selectedPost ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedPost.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Created on {formatDate(selectedPost.created_at)}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        Original Content:
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                          {selectedPost.original_content}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <GeneratedPosts posts={selectedPost.posts} />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium mb-2">
                    Select a post to view details
                  </p>
                  <p className="text-gray-400 text-sm">
                    Click on any post from the list to see the generated content
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
