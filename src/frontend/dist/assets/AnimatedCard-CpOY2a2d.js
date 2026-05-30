import { j as jsxRuntimeExports, m as motion } from "./index-BNKBygrZ.js";
function AnimatedCard({
  children,
  className = "",
  hover = true,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay },
      whileHover: hover ? { y: -4, transition: { duration: 0.2 } } : void 0,
      className: `bg-card rounded-xl border border-border shadow-warm ${hover ? "hover:shadow-elevated transition-smooth" : ""} ${className}`,
      children
    }
  );
}
export {
  AnimatedCard as A
};
