import {useContext, useEffect, useState} from "react"
import {ContextData, StepOneRequest, StepTwoRequest} from "components/typescript/ContextData"
import {useWizard, Wizard} from "react-use-wizard"
import WizardControls from "components/wizard-example/WizardControls"
import StepOne from "components/wizard-example/steps/StepOne"
import StepTwo from "components/wizard-example/steps/StepTwo"
import LastStep from "components/wizard-example/steps/LastStep"
import {UserContext} from "components/context/UserContext"
import produce from "immer"

export default function ExampleContainer() {
  const context = useContext(UserContext)
  const [data, setData] = useState<ContextData>({
    id: 1,
    address: {
      city: "",
      street: "",
    },
    lastName: "a",
    firstName: "s",
  })

  useEffect(() => {
    // update context. Usually context would be used directly but i wanted to point out how it can be done in multiple ways
    context.setState(produce(context.state, (draft) => {
      draft.contextData = data
    }))
  }, [data, context])

  function handleStepOnePostAction(context: ContextData) {
    const request: StepOneRequest = {
      firstName: context.firstName,
      lastName: context.lastName,
    }

    console.log(request) //mock api call
  }

  function handleStepTwoPostAction(context: ContextData) {
    const request: StepTwoRequest = {
      address: context.address,
      id: context.id,
    }

    console.log(request) //mock api call
  }

  return (
    <div className={"m-auto mt-8 w-1/2"}>
      <h1 className={"text-xl"}>Wizard example</h1>
      <Wizard footer={<WizardControls/>} header={<WizardHeader/>}>
        <StepOne
          data={data}
          setData={(updatedData: ContextData) => {
            setData(updatedData)
            handleStepOnePostAction(updatedData)
          }}
        />
        <StepTwo
          data={data}
          setData={(updatedData: ContextData) => {
            setData(updatedData)
            handleStepTwoPostAction(updatedData)
          }}
        />
        <LastStep data={data}/>
      </Wizard>
    </div>
  )
}

function WizardHeader() {
  const {stepCount, activeStep} = useWizard()
  return (
    <p className={"text-center"}>
      {activeStep + 1} / {stepCount}
    </p>
  )
}
