import { UserRole } from "../enums/user-role";

export interface IUserDto {
  name: string;
  createdAt: Date;
  isActive: boolean;
  role: UserRole;
}
