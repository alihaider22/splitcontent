import { GeneratedPost } from "@/types/database";

export interface GetHistoryResponse {
  posts: GeneratedPost[];
  error?: string;
}

/**
 * Get user's post generation history
 */
export async function getUserHistory(): Promise<GetHistoryResponse> {
  try {
    const response = await fetch("/api/history", {
      method: "GET",
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to fetch history");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      posts: [],
      error: error instanceof Error ? error.message : "Failed to fetch history",
    };
  }
}
