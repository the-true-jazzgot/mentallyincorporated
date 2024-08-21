import { Entity } from "../custom-types";

export interface User {
    name: string,
    profilePic?: string
}

export interface VUser extends User {
    entity: Entity;
    email?: string;
}

export interface RUser extends User {
    email: string
}