import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TableCellProps = {
children:ReactNode
} & ComponentProps<"td">

export function TableCell({children,className,...rest}: TableCellProps ) {
  return (
    <td   {...rest} className={twMerge("py-3 px-4 font-sm text-zinc-400",className)}>
        {children}     
    </td>
  )
}
