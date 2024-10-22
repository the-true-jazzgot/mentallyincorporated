import { createSelector } from "@ngrx/store";
import { AppStore } from "../app.store";
import { TicketsState } from "./ticket.reducer";

export const selectTickets = (state:AppStore) => state.tickets;
export const selectAllTickets = createSelector(
  selectTickets,
  (state:TicketsState) => state.tickets
);