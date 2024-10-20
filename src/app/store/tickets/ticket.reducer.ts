import { QueryStatus, Ticket } from "../../types"
import { createReducer, on } from "@ngrx/store";
import { createTicket, fetchTickets, updateTicket } from "./tickets.actions";

export interface TicketsState {
  status: QueryStatus
  tickets: Ticket[] 
}

const initialState:TicketsState = {
  status: "Initialized",
  tickets:[]
};

export const ticketListReducer = createReducer(
  initialState,
  on(
    fetchTickets,
    (state)=>({
      ...state,
      status: "Fetching..." as QueryStatus
    })
  ),
  on(
    createTicket,
    (state, ticket) => ({
      ...state,
      tickets: [...state.tickets, ticket]
    })
  ),
  on(
    updateTicket,
    (state:TicketsState, ticket) => {
      const updatedTickets:Ticket[] = state.tickets.map(
        item => item.id === ticket.id ? ticket : item
      ); 
      return {
        ...state,
        tickets: updatedTickets
      };
    }
  )
);