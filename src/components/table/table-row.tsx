import { ComponentProps, ReactNode } from "react"

type TableRowProps = {
children:ReactNode
} & ComponentProps<"tr">

export function TableRow({children,...rest}: TableRowProps ) {
  return (
    <tr className="border border-white/10 hover:bg-white/5" {...rest}>
        {children}     
    </tr>
  )
}
