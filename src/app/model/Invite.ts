import { Guest } from './Guest';

export interface Invite {
  id: string;
  greeting: string;
  guests: Guest[];
}
