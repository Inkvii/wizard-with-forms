import { useWizard } from "react-use-wizard"

export default function WizardControls() {
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()

  return (
    <div className={"flex space-x-2"}>
      <button
        disabled={isFirstStep}
        className={"w-full bg-blue-700 text-white px-4 py-2 disabled:bg-gray-500 transition-all"}
        onClick={previousStep}
      >
        Previous
      </button>
      <button
        disabled={isLastStep}
        className={"w-full bg-green-700 text-white px-4 py-2 disabled:bg-gray-500 transition-all"}
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