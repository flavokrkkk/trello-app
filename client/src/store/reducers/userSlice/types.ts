import { IUser } from "../../../models/IUser";

export interface UserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}
