import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type IconButtonprops = {
    children:ReactNode,
    transparent?:boolean,
    disabled?:boolean
} & ComponentProps<"button">

export  function IconButton({children,transparent,disabled,...rest} : IconButtonprops) {
  return (
    <button {...rest} 
    // className={ transparent
    //  ?"bg-black/20" 
    //  : "bg-white/10 border border-white/10 rounded-md p-1.5"}
    className={
    twMerge("bg-black/20 border border-white/10 rounded-md p-1.5",
    transparent ? "bg-black/20" :"bg-white/10",
    disabled ? "opacity-50" : null )}
     >
        {children}
    </button>
  )
}
