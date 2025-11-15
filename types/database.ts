export interface GeneratedPost {
  id: string;
  user_id: string;
  title: string;
  original_content: string;
  posts: Record<string, string>;
  platforms: string[];
  created_at: string;
  updated_at: string;
}

export interface CreatePostData {
  user_id: string;
  title: string;
  original_content: string;
  posts: Record<string, string>;
  platforms: string[];
}
