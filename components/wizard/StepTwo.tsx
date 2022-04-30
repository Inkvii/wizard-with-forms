import { ContextData } from "../typescript/ContextData"
import { SubmitHandler, useForm } from "react-hook-form"
import { useWizard } from "react-use-wizard"
import { produce } from "immer"

export default function StepTwo(props: { data: ContextData; setData: (data: ContextData) => void }) {
  const { register, handleSubmit, formState, trigger } = useForm<ContextData>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onChange",
  })
  const { handleStep } = useWizard()

  const onSubmit: SubmitHandler<ContextData> = (data) => {
    props.setData(
      produce(props.data, (draft) => {
        draft.address.city = data.address.city
        draft.address.street = data.address.street
      })
    )
  }

  handleStep(async () => {
    await handleSubmit(onSubmit)()

    if (!formState.isValid) {
      throw new Error("On submit error 2")
    }
  })

  return (
    <form className={"flex flex-col space-y-2"} onSubmit={(e) => e.preventDefault()}>
      <h2 className={"text-lg"}>Step 2</h2>
      <input
        className={"border py-2 px-4"}
        {...register("address.street", { required: true, minLength: { value: 2, message: "Min 2" } })}
      />
      <input className={"border py-2 px-4"} {...register("address.city", { required: true, minLength: { value: 2, message: "Min2" } })} />
      <pre>{JSON.stringify(formState.errors.address?.city?.message, null, 2)}</pre>
      <pre>{JSON.stringify(formState.errors.address?.street?.message, null, 2)}</pre>
    </form>
  )
}
