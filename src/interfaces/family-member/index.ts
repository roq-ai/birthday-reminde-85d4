import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FamilyMemberInterface {
  id?: string;
  name: string;
  birthday: any;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FamilyMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
