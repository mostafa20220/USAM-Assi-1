import { NavLink } from "react-router-dom";

type ButtonProps = {
  type?: "primary" | "secondary" ;
  to: string;
  children: React.ReactNode;
  className?:string;
};

export default function Button({ to,type="primary",className,children }: Readonly<ButtonProps>) {
  const style = type === "primary" ? "bg-[var(--color-brand-primary)] text-white px-2 py-1 md:px-4" : "bg-[var(--color-brand-secondary)] px-0.5";
  return <NavLink className={` md:py-2  rounded-3xl  ${style} ${className} `} to={to}>{children}</NavLink>;
}
