import ExampleContainer from "components/wizard-example/ExampleContainer"
import {UserContext, UserContextState} from "components/context/UserContext"
import {useContext, useState} from "react"

export default function RegisterPage() {
  // this is initial state for the context. It is not used by the Example container but could be. Depends on the use case
  const [state, setState] = useState<UserContextState>({
    id: 0,
    contextData: {
      id: 0, firstName: "", lastName: "", address: {city: "", street: ""}
    }
  })


  return (
    <UserContext.Provider value={{state, setState}}>
      <ExampleContainer/>
      <ShowContext/>
    </UserContext.Provider>
  )
}

function ShowContext() {
  const context = useContext(UserContext)
  return (
    <div className={"m-4 p-4 shadow bg-gray-100"}>
      <pre>{JSON.stringify(context.state, null, 2)}</pre>
    </div>
  )
}


