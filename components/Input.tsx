import { forwardRef } from "react"

interface Props {
  label: string,
  onChange: (e: any) => void,
  onBlur: (e: any) => void,
  value: string
}

function InputComponent(props: Props, ref: any) {
  return (
    <div className={"flex flex-col"}>
      <p>{props.label}</p>
      <input ref={ref} className={"py-2 px-4 w-full border"} onChange={props.onChange} onBlur={props.onBlur} value={props.value} />
    </div>
  )
}

export const Input = forwardRef(InputComponent)