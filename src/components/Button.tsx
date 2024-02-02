import { NavLink } from "react-router-dom";

type ButtonProps = {
  type?: "primary" | "secondary";
  to: string;
  children: React.ReactNode;
  className?: string;
  padding?: "small" | "large";
};

export default function Button({
  to,
  type = "primary",
  className,
  children,
  padding = "small",
}: Readonly<ButtonProps>) {
  const paddingStyle =
    padding === "small" ? "sm:px-2 sm:py-1  md:px-2 md:py-1 " : "";

  const style =
    type === "primary"
      ? "bg-[var(--color-brand-primary)] text-white px-2 py-1 md:px-4"
      : "bg-[var(--color-brand-secondary)] px-0.5";

  return (
    <NavLink
      className={`inline-block rounded-3xl  ${style} ${paddingStyle} ${className} `}
      to={to}
    >
      {children}
    </NavLink>
  );
}
