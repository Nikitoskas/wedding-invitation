import { Guest } from './Guest';

export interface Invite {
  id: string;
  many: boolean,
  greeting: string;
  guests: Guest[];
}
