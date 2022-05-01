import {ContextData} from "components/typescript/ContextData"
import {createContext} from "react"

export interface UserContextState {
  contextData: ContextData
  id: number
}

export interface UserContextProvider {
  state: UserContextState
  setState: (newState: UserContextState) => void
}

export const UserContext = createContext<UserContextProvider>({} as UserContextProvider)
