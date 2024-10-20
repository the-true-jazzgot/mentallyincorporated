import { createAction, props } from "@ngrx/store";
import { User } from "../../types";

export const attemptLogIn = createAction(
  '[App component] Attempt log in',
  props<User>()
)

export const userLoginRejected = createAction(
  '[App component] Login failed',
  props<Error>()
)