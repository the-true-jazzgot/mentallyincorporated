import { createSelector } from "@ngrx/store";
import { ToastsState } from "./toast.reducers";

export const selectToasts = (state:ToastsState) => state;
export const selectAllToasts = createSelector(
  selectToasts,
  (state:ToastsState) => state.activeToasts
);