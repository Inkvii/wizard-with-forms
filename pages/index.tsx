import { useEffect, useState } from "react"
import { ContextData } from "../components/typescript/ContextData"
import WizardControls from "../components/wizard/WizardControls"
import { Wizard } from "react-use-wizard"
import StepOne from "../components/wizard/StepOne"
import StepTwo from "../components/wizard/StepTwo"
import LastStep from "../components/wizard/LastStep"

export default function HomePage() {
  const [data, setData] = useState<ContextData>({
    address: {
      city: "",
      street: "",
    },
    lastName: "a",
    firstName: "s",
  })

  useEffect(() => {
    console.log("Data has changed", data)
  }, [data])

  return (
    <div className={"w-1/2 m-auto mt-8"}>
      <Wizard footer={<WizardControls />}>
        <StepOne data={data} setData={(data: ContextData) => {
          setData(data)
          console.info(data)
        }} />
        <StepTwo data={data} setData={(data: ContextData) => {
          setData(data)
          console.info(data)
        }}/>
        <LastStep data={data} />
      </Wizard>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}