
import { TicketStatus } from "../custom-types";
import { VUser, RUser} from "./User";

export interface Ticket {
    readonly id: string, // (Type ID?)
    title: string,
    status: TicketStatus,
    description?: string,
    creationDate?: Date,
    assignedTo?: VUser | RUser,
    owner?: VUser,
    createdBy: VUser | RUser
}

// export interface PersonalTicket extends Ticket {
//     createdBy: RUser
// }

// export interface SystemTicket extends Ticket {
//     createdBy: VUser
// }

// export type Tickets = SystemTicket | PersonalTicket;