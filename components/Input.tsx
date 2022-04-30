import { forwardRef } from "react"
import clsx from "clsx"

interface Props {
  label: string
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  value: string
  error?: string
  className?: string
  disabled?: boolean
  overrideClassName?: boolean
}

function InputComponent(props: Props, ref: any) {
  return (
    <div className={"flex flex-col"}>
      <div className={"inline-flex h-6 items-center space-x-2"}>
        <p className={"text-xs uppercase leading-4 tracking-widest"}>{props.label}</p>
        <p className={"text-md truncate leading-4  text-red-600"}>{props.error}</p>
      </div>
      <input
        ref={ref}
        className={
          props.overrideClassName
            ? props.className
            : clsx(
                "w-full border py-2 px-4 transition-all",
                props.error ? "border-red-600 focus:outline-red-600" : "",
                "disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200",
                props.className
              )
        }
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled ?? false}
        value={props.value}
      />
    </div>
  )
}

export const Input = forwardRef(InputComponent)
