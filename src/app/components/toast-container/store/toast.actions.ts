import { createAction, props } from "@ngrx/store";
import { Toast } from "../toast-container.component";

export const addToastFromEffect = createAction(
  '[Effect ...] Create toast',
  props<Toast>()
);

export const removeToast = createAction(
  '[Toast] Remove toast',
  props<{message:string}>()
)