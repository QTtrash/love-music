export interface IUser {
  id: string;
  username: string;
  currentlyListening: string;
  latitude: number;
  longitude: number;
}

export type UserDto = Omit<IUser, 'id'>;
