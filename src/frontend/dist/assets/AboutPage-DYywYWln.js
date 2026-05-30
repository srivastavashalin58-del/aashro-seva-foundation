import { j as jsxRuntimeExports, m as motion, O as ORG } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
import { C as CircleCheckBig } from "./circle-check-big-VEJcCU_z.js";
const values = [
  {
    icon: "❤️",
    title: "Compassion",
    desc: "We treat every individual with empathy, warmth, and unconditional care."
  },
  {
    icon: "🤝",
    title: "Dignity",
    desc: "Every resident and community member deserves respect and dignified living."
  },
  {
    icon: "🌱",
    title: "Service",
    desc: "Selfless service is at the heart of all our programs and activities."
  },
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "We operate with full transparency and accountability in all endeavors."
  },
  {
    icon: "🏘️",
    title: "Community",
    desc: "We believe in the power of collective action and community ownership."
  },
  {
    icon: "✨",
    title: "Hope",
    desc: "We create pathways of hope for those who feel forgotten or alone."
  }
];
const objectives = [
  "Establish and operate a dignified old age home for homeless and needy elderly persons",
  "Provide daily nutritious meals, healthcare, and emotional support to residents",
  "Conduct rural community welfare programs and aid distribution drives",
  "Create volunteer opportunities that foster compassion and social responsibility",
  "Build sustainable funding models for long-term social impact",
  "Collaborate with local government and healthcare providers for holistic care"
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Who We Are",
        title: "About Aashro Seva Foundation",
        subtitle: "A registered public charitable trust serving humanity with dignity and compassion since its founding in Gujarat."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-3", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-foreground mb-5", children: "Born from a Vision of Dignity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Aashro Seva Foundation was founded with a singular purpose: to ensure that no elderly person in our community spends their final years in neglect, loneliness, or poverty. Our founders witnessed the silent struggles of aged individuals in rural Gujarat and resolved to act." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              "Named in honor of the late Smt. Jamnaben Zaverbhai Patel, our primary facility —",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: ORG.facilityName }),
              " ",
              "— stands as a beacon of hope on the Dabhoi-Karjan Road in Kayavarohan, Vadodara."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Registered as a Public Charitable Trust under Gujarat jurisdiction and holding 12AB tax exemption status (verified by the Ahmedabad ITAT), we are accountable, transparent, and dedicated to genuine social impact." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/community-meal.dim_800x500.jpg",
              alt: "Foundation in action",
              className: "rounded-2xl shadow-elevated object-cover w-full h-80"
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { className: "p-8", hover: false, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-primary mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To provide dignified shelter, holistic care, and unwavering support to elderly individuals and marginalized communities in rural Gujarat, ensuring that every person lives with respect, love, and hope." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { className: "p-8", hover: false, delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "🌟" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-primary mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A society where every elderly person is cared for with dignity, where communities uplift one another, and where compassionate service transforms lives and inspires future generations." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          tag: "Goals",
          title: "Our Objectives",
          subtitle: "Clear, actionable goals that guide every program and initiative we run."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto", children: objectives.map((obj, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -15 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.07 },
          className: "flex items-start gap-3 bg-card rounded-lg p-4 border border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground leading-relaxed", children: obj })
          ]
        },
        obj
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { tag: "What We Stand For", title: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AnimatedCard,
        {
          delay: i * 0.08,
          className: "p-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: v.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-primary mb-2", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.desc })
          ]
        },
        v.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto", children: [
      { label: "Registration", value: ORG.registration },
      { label: "Tax Exemption", value: ORG.taxExemption }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-1", children: item.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-primary-foreground", children: item.value })
    ] }, item.label)) }) }) })
  ] });
}
export {
  AboutPage as default
};
