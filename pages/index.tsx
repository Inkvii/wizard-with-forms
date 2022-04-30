import { useState } from "react"
import { ContextData, StepOneRequest, StepTwoRequest } from "../components/typescript/ContextData"
import WizardControls from "../components/wizard/WizardControls"
import { useWizard, Wizard } from "react-use-wizard"
import StepOne from "../components/wizard/StepOne"
import StepTwo from "../components/wizard/StepTwo"
import LastStep from "../components/wizard/LastStep"

export default function HomePage() {
  const [data, setData] = useState<ContextData>({
    id: 1,
    address: {
      city: "",
      street: "",
    },
    lastName: "a",
    firstName: "s",
  })

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
      <form onSubmit={(e) => e.preventDefault()}>
        <Wizard footer={<WizardControls />} header={<WizardHeader />}>
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
          <LastStep data={data} />
        </Wizard>
      </form>
    </div>
  )
}

function WizardHeader() {
  const { stepCount, activeStep } = useWizard()
  return (
    <p className={"text-center"}>
      {activeStep + 1} / {stepCount}
    </p>
  )
}
