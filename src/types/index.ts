export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
