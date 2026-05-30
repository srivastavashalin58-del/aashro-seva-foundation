import { j as jsxRuntimeExports, T as TESTIMONIALS, m as motion } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { A as AppButton } from "./AppButton-BGoBuvRp.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
function TestimonialsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Stories",
        title: "What People Say",
        subtitle: "Hear directly from the people whose lives have been touched by Aashro Seva Foundation."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "testimonials.main_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { tag: "Voices", title: "Elder Stories & Testimonials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AnimatedCard,
            {
              delay: i * 0.1,
              className: "p-8",
              "data-ocid": `testimonials.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0", children: t.name.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-accent font-medium", children: t.role })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl text-primary/10 absolute -top-4 -left-2 font-serif leading-none select-none", children: "“" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed italic pl-4", children: t.quote })
                ] })
              ]
            },
            t.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "💬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-3", children: "Share Your Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Have you been impacted by Aashro Seva Foundation as a resident, volunteer, or donor? We'd love to hear your story." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppButton,
            {
              href: "/contact",
              variant: "primary",
              size: "lg",
              "data-ocid": "testimonials.cta.share_button",
              children: "Contact Us to Share"
            }
          )
        ]
      }
    ) }) })
  ] });
}
export {
  TestimonialsPage as default
};
