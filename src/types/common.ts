export type ID = string | number;

export enum Role {
  USER = "USER",
  TRAINER = "TRAINER",
  ADMIN = "ADMIN",
}

export interface ApiError {
  message: string;
  code?: number;
  details: Record<string, number>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
