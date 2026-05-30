import { j as jsxRuntimeExports } from "./index-BNKBygrZ.js";
function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  compact = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative flex items-center justify-center overflow-hidden ${compact ? "min-h-[240px] md:min-h-[300px]" : "min-h-[360px] md:min-h-[440px]"}`,
      style: image ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: image ? "linear-gradient(135deg, oklch(0.45 0.16 265 / 0.88) 0%, oklch(0.63 0.19 70 / 0.7) 100%)" : "linear-gradient(135deg, oklch(0.45 0.16 265) 0%, oklch(0.35 0.18 265) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 py-12 text-center", children: [
          breadcrumb && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm mb-3 font-medium tracking-wide uppercase", children: breadcrumb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto", children: subtitle })
        ] })
      ]
    }
  );
}
export {
  PageHero as P
};
