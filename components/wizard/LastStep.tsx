import { ContextData } from "../typescript/ContextData"

export default function LastStep(props: { data: ContextData }) {
  return (
    <div className={"rounded bg-gray-100 p-4 shadow-lg"}>
      <h2 className={"text-lg"}>Overview</h2>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  )
}
