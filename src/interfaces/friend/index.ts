import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FriendInterface {
  id?: string;
  name: string;
  birthday: any;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FriendGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
