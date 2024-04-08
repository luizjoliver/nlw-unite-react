import { ComponentProps, ReactNode } from "react"

type TableHeaderProps = {
children:ReactNode
} & ComponentProps<"th">

export function TableHeader({children,...rest}: TableHeaderProps ) {
  return (
    <th  className="py-3 px-4 font-sm font-semibold text-left" {...rest}>
        {children}     
    </th>
  )
}
