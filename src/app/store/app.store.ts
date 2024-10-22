import { TicketsState } from "./tickets/ticket.reducer";
import { UserStore } from "./user/user.reducer";

export interface AppStore {
  tickets: TicketsState,
  user: UserStore
}