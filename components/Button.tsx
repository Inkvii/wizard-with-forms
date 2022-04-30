import { FocusEventHandler, forwardRef, MouseEventHandler, ReactNode } from "react"
import clsx from "clsx"

type ButtonVariant = "primary" | "secondary" | "outline"

interface Props {
  children: ReactNode
  variant: ButtonVariant
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  onBlur?: FocusEventHandler<HTMLButtonElement> | undefined
  className?: string
  disabled?: boolean
  overrideClassName?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

function ButtonComponent(props: Props, ref: any) {
  return (
    <button
      ref={ref}
      type={props.type}
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
              "border-2",

              props.variant === "primary" && [
                "bg-blue-700 text-white",
                "hover:brightness-110",
                "disabled:bg-gray-300",
                "rounded focus:ring-2 focus:ring-blue-700 focus:ring-offset-2",
              ],
              props.variant === "secondary" && [
                "bg-green-700 text-white",
                "hover:brightness-110",
                "disabled:bg-gray-300",
                "rounded focus:ring-2 focus:ring-blue-700 focus:ring-offset-2",
              ],
              props.variant === "outline" && [
                "border-blue-700 text-blue-700",
                "hover:font-semibold hover:shadow-md hover:brightness-90",
                "disabled:font-normal disabled:text-gray-600 disabled:shadow-none disabled:ring-gray-600 disabled:hover:brightness-100",
                "rounded focus:ring-2 focus:ring-blue-700 focus:ring-offset-2",
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
