import { j as jsxRuntimeExports, m as motion } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { A as AppButton } from "./AppButton-BGoBuvRp.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
import { C as CircleCheckBig } from "./circle-check-big-VEJcCU_z.js";
const timeline = [
  {
    year: "2019",
    title: "Foundation Established",
    desc: "Aashro Seva Foundation registered as a Public Charitable Trust in Gujarat."
  },
  {
    year: "2020",
    title: "First Residents Welcome",
    desc: "The ashram opened its doors, welcoming the first group of elderly residents."
  },
  {
    year: "2022",
    title: "12AB Tax Exemption",
    desc: "Ahmedabad ITAT granted tax-exempt status, boosting donor confidence."
  },
  {
    year: "2023",
    title: "New Wing Sanctioned",
    desc: "Plans approved for a new residential wing to accommodate 30 more elders."
  },
  {
    year: "2024",
    title: "Construction Begins",
    desc: "Groundbreaking ceremony held for the expanded facility on Dabhoi-Karjan Road."
  },
  {
    year: "2026",
    title: "Wing Nearing Completion",
    desc: "New wing 50% complete, expected to open by late 2026."
  }
];
const services = [
  {
    icon: "🏡",
    title: "Shelter & Accommodation",
    desc: "Clean, safe, well-maintained rooms with all essential amenities."
  },
  {
    icon: "🍽️",
    title: "Daily Meals",
    desc: "Three nutritious, freshly prepared meals served daily."
  },
  {
    icon: "💊",
    title: "Medical Support",
    desc: "Regular doctor visits, medicines, and specialist referrals."
  },
  {
    icon: "💚",
    title: "Emotional Care",
    desc: "Counselling, companionship, and spiritual support."
  },
  {
    icon: "🧘",
    title: "Recreational Activities",
    desc: "Games, cultural programs, yoga, and social events."
  },
  {
    icon: "🤝",
    title: "Family Connection",
    desc: "Support to maintain family bonds and celebrate occasions together."
  }
];
function OldAgeHomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Our Flagship Project",
        title: "Jamnaben Zaverbhai Patel Vruddhashram",
        subtitle: "A place of dignity, care, and belonging for elderly individuals in need.",
        image: "/assets/generated/hero-elder-care.dim_1600x900.jpg"
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-3", children: "About the Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-foreground mb-5", children: "સ્વ. જમનાબેન ઝવેરભાઈ પટેલ વૃદ્ધાશ્રમ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Located on the Dabhoi-Karjan Road in Kayavarohan, our vruddhashram (old age home) provides a permanent, loving home to elderly individuals who lack family support, shelter, or resources." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Named in memory of the late Smt. Jamnaben Zaverbhai Patel, this facility embodies her legacy of compassion and community service. Every resident is treated as a beloved family member." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "The ashram is currently undergoing expansion, with a new residential wing under construction that will increase capacity by 30 additional residents — bringing hope and shelter to even more elders." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.15 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/old-age-home-construction.dim_800x500.jpg",
                alt: "Old age home construction",
                className: "rounded-2xl shadow-elevated object-cover w-full h-72"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-accent/10 border border-accent/20 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold text-sm", children: "Construction Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-accent font-bold", children: "50%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-muted rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-accent h-2 rounded-full",
                  style: { width: "50%" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "New wing expected completion: Late 2026" })
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          tag: "What We Provide",
          title: "Our Services",
          subtitle: "Comprehensive care covering every aspect of a dignified, comfortable life."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { delay: i * 0.08, className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "oldagehome.timeline_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionTitle,
            {
              tag: "Our Journey",
              title: "Development Timeline",
              subtitle: "From a vision to a growing reality of care and impact."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-0 bottom-0 w-0.5 bg-border" }),
            timeline.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: i * 0.1 },
                className: "relative flex gap-6 mb-8 last:mb-0",
                "data-ocid": `oldagehome.timeline.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold z-10", children: item.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-accent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm", children: item.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: item.desc })
                  ] })
                ]
              },
              item.year
            ))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-primary-foreground mb-4", children: "Support the Old Age Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-lg mx-auto", children: "Help us complete the new wing and provide a loving home to 30 more elderly residents." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppButton,
          {
            href: "/donate",
            variant: "orange",
            size: "lg",
            "data-ocid": "oldagehome.cta.donate_button",
            children: "Donate to the Project"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppButton,
          {
            href: "/volunteer",
            variant: "white",
            size: "lg",
            "data-ocid": "oldagehome.cta.volunteer_button",
            children: "Volunteer at the Ashram"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  OldAgeHomePage as default
};
