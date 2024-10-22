import { createSelector } from "@ngrx/store";
import { AppStore } from "../app.store";
import { UserStore } from "./user.reducer";

export const selectUser = (state:AppStore) => state.user
export const selectUserData = createSelector(
  selectUser,
  (state:UserStore) => state.userData
);