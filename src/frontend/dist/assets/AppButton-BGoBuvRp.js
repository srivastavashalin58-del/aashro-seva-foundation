import { j as jsxRuntimeExports, L as Link } from "./index-BNKBygrZ.js";
const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary hover:bg-primary/10",
  orange: "bg-accent text-accent-foreground hover:opacity-90 shadow-warm",
  white: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm"
};
const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-lg font-semibold",
  lg: "px-8 py-3.5 text-base rounded-xl font-semibold"
};
function AppButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  href,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 transition-smooth font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: classes, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: classes,
      ...rest,
      children
    }
  );
}
export {
  AppButton as A
};
