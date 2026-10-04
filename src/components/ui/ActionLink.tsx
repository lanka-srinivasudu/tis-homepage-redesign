import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
type Props = ComponentProps<"a"> & {
  variant?: "primary" | "light" | "outline" | "text";
};
export function ActionLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <a className={`action action--${variant} ${className}`} {...props}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
