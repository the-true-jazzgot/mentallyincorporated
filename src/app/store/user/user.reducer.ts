import { createReducer, on, State } from "@ngrx/store"
import { AuthData, RUser } from "../../types"
import { attemptLogIn, userLoginRejected } from "./user.actions"

export interface UserStore {
  ticketStats: {
    openTickets: number,
    assignedTickets: number,
    completedTickets: number
  }
  userData: RUser,
  authData: AuthData
  status: "pending" | "anonymous" | "authenticated",
  errorMsg?: string
}

const noAuth: AuthData = {
  isAuthenticated: false,
  token: "",
  userId: ""
}

const anonymousUser: RUser = {
  email: "",
  name: "anonymous",
  password: ""
}

const initialState: UserStore = {
  status: "anonymous",
  ticketStats: {
    openTickets: 0,
    assignedTickets: 0,
    completedTickets: 0
  },
  userData: anonymousUser,
  authData: noAuth
}

export const userReducer = createReducer(
  initialState,
  on(
    attemptLogIn,
    (state, login) => ({
      ...state,
      status: "pending" as UserStore["status"],
      user: login,
      errorMsg: undefined
    })
  ),
  on(
    userLoginRejected,
    (status, err) => ({
      ...status,
      user: anonymousUser,
      status: "anonymous" as UserStore["status"],
      errorMsg: err.message
    })
  )
)