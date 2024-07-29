export interface ApiResponse<T> {
  success: boolean;
  data: T | T[];
  errors: { code: string; description: string }[];
}

export interface Paginated<T> {
  total: number;
  count: number;
  items: T[];
}
