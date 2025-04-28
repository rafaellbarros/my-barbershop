import { eUserStatus } from '../enums/user-status.enum';

export interface iUserUser {
  id: string;
  name: string;
  email: string;
  password: string;
  status: eUserStatus;
  created_at: Date;
  updated_at: Date;
}
