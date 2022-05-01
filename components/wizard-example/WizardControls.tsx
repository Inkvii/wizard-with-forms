import {useWizard} from "react-use-wizard"
import {Button} from "components/Button"

export default function WizardControls() {
  const {nextStep, previousStep, isFirstStep, isLastStep} = useWizard()

  if (isLastStep) {
    return null
  }

  return (
    <div className={"flex space-x-2"}>
      <Button disabled={isFirstStep} variant={"outline"} onClick={previousStep}>
        Previous
      </Button>
      <Button
        type={"submit"}
        disabled={isLastStep}
        variant={"primary"}
        onClick={async () => {
          try {
            await nextStep()
          } catch (error) {
            console.warn(error)
          }
        }}
      >
        Next
      </Button>
    </div>
  )
}
