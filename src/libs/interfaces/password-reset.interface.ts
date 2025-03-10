import { IUser } from './user.interface';

export interface IPasswordResetToken {
  _id: string;

  token: string;

  resetAt?: Date;

  user: IUser;

  userId: string;

  createdAt: Date;

  creUsrId: string;

  updUsrId: string;
}
