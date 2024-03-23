import { Guest } from './Guest';

export interface Invite {
  id: string;
  isMany: boolean,
  greeting: string;
  guests: Guest[];
}
