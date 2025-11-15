export interface GeneratePostsParams {
  title: string;
  content: string;
  platforms: string[];
}

export interface GeneratePostsResponse {
  posts: Record<string, string>;
}

/**
 * Generate social media posts for selected platforms
 */
export async function generatePosts(
  params: GeneratePostsParams
): Promise<GeneratePostsResponse> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || "Failed to generate posts");
  }

  const data = await response.json();
  return data;
}
