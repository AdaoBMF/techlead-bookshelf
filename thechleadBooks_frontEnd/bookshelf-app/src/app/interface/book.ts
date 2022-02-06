import { User } from './user';
export interface Book{

  id: number,
  title: string,
  author: string,
  uploadDate: string,
  user: User

}