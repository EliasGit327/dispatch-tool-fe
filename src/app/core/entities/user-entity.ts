import { UserRole } from "../enums/user-role";

export interface IUserEntity {
  _id: string;
  name: string;
  createdAt: Date;
  telegramId?: number;
  isActive: boolean;
  role: UserRole;
}
