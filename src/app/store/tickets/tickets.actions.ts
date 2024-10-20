import { createAction, props } from "@ngrx/store";
import { Ticket } from "../../types";

export const fetchTickets = createAction(
  '[Ticket list] Fetch tickets from server'
);

export const createTicket = createAction(
  '[Create ticket form] Create ticket',
  props<Ticket>()
);

export const updateTicket = createAction(
  "[Ticket] Update ticket",
  props<Ticket>()
);