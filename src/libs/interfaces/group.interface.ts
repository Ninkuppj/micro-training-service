import { IPermission } from './permission.interface';
import { IUser } from './user.interface';

export interface IGroup {
  id: string;
  creUsrId: string;
  updUsrId: string;
  createdAt: Date;
  updatedAt: Date;
  groupNm: string;
  groupDesc: string;
  actFlg: boolean;
  userIds: string[];
  users: IUser[];
  permissions: IPermission[];
  prmssnId: string[];
}
