import { AsyncActionCreators } from "../async-data";
import { userActions } from "../reducers/userSlice/userSlice";

export const AllActionCreators = {
  ...userActions,
  ...AsyncActionCreators,
};
