import { TicketStatus } from "../custom-types";
import { VUser, RUser} from "./User";

interface Ticket {
    readonly id: number, // (Type ID?)
    title: string,
    status: TicketStatus,
    description?: string,
    creationDate?: Date,
    assignedTo?: VUser | RUser,
    owner?: VUser
}

export interface PersonalTicket extends Ticket {
    createdBy: RUser
}

export interface SystemTicket extends Ticket {
    createdBy: VUser
}