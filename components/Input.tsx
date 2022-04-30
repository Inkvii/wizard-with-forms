import { forwardRef } from "react"
import clsx from "clsx"

interface Props {
  label: string
  onChange: (e: any) => void
  onBlur: (e: any) => void
  value: string
  error?: string
}

function InputComponent(props: Props, ref: any) {
  return (
    <div className={"flex flex-col"}>
      <div className={"flex space-x-2"}>
        <p>{props.label}</p>
        <p className={"inline-block truncate text-red-600"}>{props.error}</p>
      </div>
      <input
        ref={ref}
        className={clsx("w-full border py-2 px-4 transition-all", props.error ? "border-red-600 focus:outline-red-600" : "")}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  )
}

export const Input = forwardRef(InputComponent)
