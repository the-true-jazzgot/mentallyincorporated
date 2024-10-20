export type TicketStatus = "New" | "Created" | "Open" | "Active" | "Closed" | "Deleted" | "Approved" | "Approved conditionally";
export type Entity = "Emotion" | "Feeling";
export type QueryStatus = "Initialized" | "Up to date" | "Fetching..." | "Error fetching!";

export interface AuthData {
  token: string,
  userId: string,
  isAuthenticated: boolean
}

export interface User {
  name: string,
  profilePicUrl?: string,
}
export interface VUser extends User {
  entity: Entity; //COPY: reconsider entity identity
  email?: string;
}
export interface RUser extends User {
  email: string,
  password: string
}
export type Ticket = {
  readonly id: string,
  title: string,
  status: TicketStatus,
  description?: string,
  creationDate?: Date,
  assignedTo?: VUser | RUser,
  owner?: VUser,
  createdBy: VUser | RUser,
  serverSync: boolean
}