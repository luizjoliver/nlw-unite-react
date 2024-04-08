import { ComponentProps, ReactNode } from "react";

type NavLinkProps = ComponentProps<"a"> & {
    children: ReactNode;
  };

export  function NavLink({children,...rest}:NavLinkProps) {
  return (
    <a  {...rest} className="font-medium text-sm">{children}</a>
  )
}
