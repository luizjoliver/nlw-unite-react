import { ComponentProps, ReactNode } from "react"

type TableProps =  {
    children:ReactNode
} & ComponentProps<"table">

export default function Table({children,...rest} : TableProps) {
  return (
    <div className="border border-white/10 rounded-lg ">

        <table className="w-full border " {...rest}>
            {children}
        </table>

    </div>
  )
}
