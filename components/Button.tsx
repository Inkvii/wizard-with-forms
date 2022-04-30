import { FocusEventHandler, forwardRef, MouseEventHandler, ReactNode } from "react"
import clsx from "clsx"

type ButtonType = "primary" | "secondary" | "outline"

interface Props {
  children: ReactNode
  type: ButtonType
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  onBlur?: FocusEventHandler<HTMLButtonElement> | undefined
  className?: string
  disabled?: boolean
  overrideClassName?: boolean
}

function ButtonComponent(props: Props, ref: any) {
  return (
    <button
      ref={ref}
      disabled={props.disabled}
      onClick={props.onClick}
      onBlur={props.onBlur}
      className={
        props.overrideClassName
          ? props.className
          : clsx(
              "w-full py-3 px-4",
              "uppercase tracking-wider",
              "disabled:cursor-not-allowed",
              props.type === "primary" && ["bg-blue-700 text-white", "hover:brightness-110", "disabled:bg-gray-300"],
              props.type === "secondary" && ["bg-green-700 text-white", "hover:brightness-110", "disabled:bg-gray-300"],
              props.type === "outline" && [
                "text-blue-700 ring-2 ring-inset ring-blue-700",
                "hover:font-semibold hover:shadow-md hover:brightness-90",
                "disabled:font-normal disabled:text-gray-600 disabled:shadow-none disabled:ring-gray-600 disabled:hover:brightness-100",
              ],
              "transition-all",
              props.className
            )
      }
    >
      {props.children}
    </button>
  )
}

export const Button = forwardRef(ButtonComponent)
