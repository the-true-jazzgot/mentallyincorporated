import { Status } from "../custom-types";

export interface Ticket {
    readonly id: number, // (Type ID?)
    title: string,
    status: Status,
    description?: string,
    date?: Date,
}