export interface ContextData {
  id: number
  firstName: string
  lastName: string
  address: {
    street: string
    city: string
  }
}

export interface StepOneRequest {
  firstName: string
  lastName: string
}

export interface StepTwoRequest {
  id: number
  address: {
    street: string
    city: string
  }
}
