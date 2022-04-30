import { useWizard } from "react-use-wizard"

export default function WizardControls() {
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()

  if (isLastStep) {
    return null
  }

  return (
    <div className={"flex space-x-2"}>
      <button
        disabled={isFirstStep}
        className={"w-full bg-blue-700 px-4 py-2 text-white transition-all disabled:bg-gray-500"}
        onClick={previousStep}
      >
        Previous
      </button>
      <button
        disabled={isLastStep}
        className={"w-full bg-green-700 px-4 py-2 text-white transition-all disabled:bg-gray-500"}
        onClick={async () => {
          try {
            await nextStep()
          } catch (error) {
            console.warn(error)
          }
        }}
      >
        Next
      </button>
    </div>
  )
}
