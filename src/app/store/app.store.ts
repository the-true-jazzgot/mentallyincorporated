import { TicketsState } from "./tickets/ticket.reducer";
import { UserStore } from "./user/user.reducer";

export interface AppState {
  tickets: TicketsState,
  user: UserStore
}