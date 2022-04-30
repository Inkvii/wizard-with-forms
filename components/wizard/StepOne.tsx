import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ContextData } from "../typescript/ContextData"
import { useWizard } from "react-use-wizard"
import { produce } from "immer"
import { Input } from "../Input"

export default function StepOne(props: { data: ContextData; setData: (data: ContextData) => void }) {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<ContextData>({ mode: "all", shouldFocusError: true, defaultValues: props.data })
  const { handleStep } = useWizard()

  const onSubmit: SubmitHandler<ContextData> = async (data) => {
    props.setData(
      produce(props.data, (draft) => {
        draft.firstName = data.firstName
        draft.lastName = data.lastName
      })
    )
  }

  handleStep(async () => {
    await handleSubmit(onSubmit)()

    if (!isValid) {
      throw new Error("On submit error 2")
    }
  })

  return (
    <div className={"flex flex-col space-y-2"}>
      <h2 className={"text-lg"}>Step 1</h2>
      <Controller
        control={control}
        name={"firstName"}
        rules={{ required: { value: true, message: "required fn" }, minLength: { value: 2, message: "min 2" } }}
        render={({ field, fieldState }) => <Input {...field} label={"First name"} error={fieldState.error?.message} />}
      />
      <Controller
        control={control}
        name={"lastName"}
        rules={{ required: { value: true, message: "required fn" }, minLength: { value: 2, message: "min 2" } }}
        render={({ field, fieldState }) => <Input {...field} label={"Last name"} error={fieldState.error?.message} />}
      />
      <hr />
      <Input label={"Test disabled"} value={"disabled"} disabled={true} />

      <pre>{JSON.stringify(errors.firstName?.message, null, 2)}</pre>
      <pre>{JSON.stringify(errors.lastName?.message, null, 2)}</pre>
    </div>
  )
}
