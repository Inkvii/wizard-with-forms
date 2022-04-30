import { ContextData } from "../typescript/ContextData"

export default function LastStep(props: { data: ContextData }) {
  return (
    <div className={"bg-gray-100 shadow-lg rounded p-4"}>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  )
}