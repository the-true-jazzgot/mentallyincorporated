import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { state } from "@angular/animations";
import { TicketsState } from "./ticket.reducer";

export const selectTickets = (state:AppState) => state.tickets;
export const selectAllTickets = createSelector(
  selectTickets,
  (state:TicketsState) => state.tickets
);