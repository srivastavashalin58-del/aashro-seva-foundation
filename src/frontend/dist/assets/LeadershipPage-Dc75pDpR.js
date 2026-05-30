import { c as createLucideIcon, j as jsxRuntimeExports, m as motion } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { A as AppButton } from "./AppButton-BGoBuvRp.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function LeadershipPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Our Team",
        title: "Leadership",
        subtitle: "Guided by compassion and driven by purpose — meet the person leading Aashro Seva Foundation."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "leadership.profile_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "md:col-span-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/leader-nitinbhai.dim_400x400.jpg",
                    alt: "Nitinbhai Chauhan",
                    className: "w-full max-w-sm mx-auto rounded-2xl shadow-elevated object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Nitinbhai Chauhan" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent font-semibold mt-1", children: "Managing Trustee" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Aashro Seva Foundation" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
              className: "md:col-span-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-4", children: "Message from Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-10 w-10 text-primary/20 absolute -top-2 -left-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "pl-8 text-foreground text-lg leading-relaxed font-medium italic", children: '"Every elder who comes to us carries with them a lifetime of stories, wisdom, and love. It is our sacred duty to ensure their remaining years are filled with dignity, care, and the warmth of family. Aashro Seva Foundation is not just an institution — it is a promise."' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nitinbhai Chauhan has been the driving force behind Aashro Seva Foundation since its inception. His unwavering commitment to social welfare and elder care has shaped the foundation's identity and programs from the ground up." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Under his leadership, the foundation has established a functional old age home, secured 12AB tax exemption status, and launched multiple community welfare programs across rural Vadodara." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nitinbhai's vision is to create a model of compassionate elder care that can be replicated across Gujarat — ensuring that every senior citizen, regardless of background, has access to dignified care and a loving community." })
                ] })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { tag: "Looking Ahead", title: "Vision for Social Impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        {
          icon: "🏠",
          title: "Expand the Ashram",
          desc: "Complete the new residential wing to house 30 more elderly residents in dignified conditions."
        },
        {
          icon: "💊",
          title: "Holistic Healthcare",
          desc: "Establish a dedicated medical centre within the ashram for regular and specialist care."
        },
        {
          icon: "🌱",
          title: "Rural Outreach Scale-Up",
          desc: "Extend community welfare programs to 20+ villages in the Dabhoi and Karjan talukas."
        },
        {
          icon: "🎓",
          title: "Youth Volunteerism",
          desc: "Create structured volunteer programs engaging college students and young professionals."
        },
        {
          icon: "🤝",
          title: "Community Partnerships",
          desc: "Partner with local businesses, hospitals, and government bodies for sustained support."
        },
        {
          icon: "❤️",
          title: "100 Elders Served",
          desc: "Reach the milestone of supporting 100 elderly residents with full residential care."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { delay: i * 0.08, className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: item.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.desc })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-primary-foreground mb-6", children: "Our Commitment to Society" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85 leading-relaxed text-lg mb-8", children: "Aashro Seva Foundation commits to full transparency, grassroots impact, and the unwavering belief that every human being — especially our elders — deserves love, respect, and care. We will continue to grow, serve, and inspire for generations to come." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppButton,
          {
            href: "/donate",
            variant: "orange",
            size: "lg",
            "data-ocid": "leadership.cta.donate_button",
            children: "Support Our Mission"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppButton,
          {
            href: "/contact",
            variant: "white",
            size: "lg",
            "data-ocid": "leadership.cta.contact_button",
            children: "Get in Touch"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  LeadershipPage as default
};
