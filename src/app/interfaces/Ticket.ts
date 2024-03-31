import { TicketStatus } from "../custom-types";
import { VUser, RUser} from "./User";

export interface Ticket {
    readonly id: number, // (Type ID?)
    title: string,
    status: TicketStatus,
    description?: string,
    date?: Date,
    assignedTo?: VUser | RUser
}

export interface PersonalTicket extends Ticket {
    owner: RUser
}