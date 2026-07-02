export type CustomerState = "NEW" | "ACTIVE" | "ORDERING" | "DONE";

export type Customer = {
  id: string;
  name?: string;
  state: CustomerState;
  lastMessage?: string;
  lastSeen: Date;
};
