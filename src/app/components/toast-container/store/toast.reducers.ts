import { createReducer, on } from "@ngrx/store";
import { Toast } from "../toast-container.component";
import { addToastFromEffect } from "./toast.actions";

export interface ToastsState {
  activeToasts: Toast[] 
};

const initialState:ToastsState = {
  activeToasts:[]
};

export const toastsReducer = createReducer(
  initialState,
  on(
    addToastFromEffect,
    (state, toast)=>({
      ...state,
      toasts: [...state.activeToasts, toast]
    })
  )
);