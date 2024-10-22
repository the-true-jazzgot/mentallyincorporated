import { createAction, props } from "@ngrx/store";
import { Toast } from "../toast-container.component";

export const addToastFromEffect = createAction(
  '[Toast effect] Create toast',
  props<Toast>
);