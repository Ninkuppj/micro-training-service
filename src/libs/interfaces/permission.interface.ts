import { IGroup } from './group.interface';

export interface IPermission {
  id: string;
  creUsrId: string;
  updUsrId: string;
  createdAt: Date;
  updatedAt: Date;
  prmsnNm: string;
  prmsnDesc: string;
  actFlg: boolean;
  group: IGroup;
  groupId: string;
}
