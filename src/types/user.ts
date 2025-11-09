import { Role } from "./common";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  age?: string;
  gender?: "male" | "female" | "other";
  role: Role;
  joinedAt: string;
}

export interface UpdateProfilePayload {
  name?: string;
  age?: string;
  gender?: "male" | "female" | "other";
  avatar?: File;
}
