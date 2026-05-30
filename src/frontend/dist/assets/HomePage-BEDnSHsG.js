import { j as jsxRuntimeExports, m as motion, O as ORG, L as Link, H as Heart, U as Users, T as TESTIMONIALS, P as Phone, M as MapPin, I as IMPACT_STATS } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { A as AppButton } from "./AppButton-BGoBuvRp.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
import { A as ArrowRight } from "./arrow-right-Cj-epoBt.js";
function ImpactCounter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", "data-ocid": "home.impact_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionTitle,
      {
        tag: "Our Impact",
        title: "Making a Real Difference",
        subtitle: "Every effort counts. Here's what we've achieved together.",
        light: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: IMPACT_STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.1 },
        className: "text-center bg-primary-foreground/10 rounded-xl p-5 border border-primary-foreground/15",
        "data-ocid": `home.impact.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl md:text-3xl text-primary-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-primary-foreground/75 mt-1", children: stat.label })
        ]
      },
      stat.label
    )) })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex items-center overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/hero-elder-care.dim_1600x900.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.45 0.16 265 / 0.88) 0%, oklch(0.25 0.14 265 / 0.6) 60%, oklch(0.63 0.19 70 / 0.3) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "inline-block px-4 py-1.5 bg-accent/90 text-accent-foreground text-sm font-semibold rounded-full mb-6",
                    children: ORG.facilityNameGujarati
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6", children: ORG.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed", children: ORG.subTagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/donate",
                      className: "flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground rounded-xl font-semibold text-base hover:opacity-90 transition-smooth shadow-elevated",
                      "data-ocid": "home.hero.donate_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }),
                        "Donate Now"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/volunteer",
                      className: "flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary-foreground hover:text-primary transition-smooth",
                      "data-ocid": "home.hero.volunteer_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
                        "Become Volunteer"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/old-age-home",
                      className: "flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary-foreground/25 transition-smooth border border-primary-foreground/30",
                      "data-ocid": "home.hero.oldagehome_button",
                      children: "Support Old Age Home"
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "home.mission_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/community-meal.dim_800x500.jpg",
              alt: "Community serving",
              className: "rounded-2xl shadow-elevated object-cover w-full h-72 md:h-96"
            }
          )
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-3", children: "Our Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight", children: "Fostering Community and Well-being" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg leading-relaxed mb-6", children: "Aashro Seva Foundation is a registered public charitable trust dedicated to dignified elder care and humanitarian work. We believe every person deserves love, shelter, and respect — especially in their golden years." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppButton, { href: "/about", variant: "outline", size: "lg", children: [
              "Learn Our Story ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", "data-ocid": "home.work_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          tag: "What We Do",
          title: "Our Work",
          subtitle: "Comprehensive care and support for the elderly and marginalized communities."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        {
          icon: "🏡",
          title: "Old Age Home",
          desc: "Safe, dignified shelter and daily care for elderly residents who need a home.",
          href: "/old-age-home"
        },
        {
          icon: "🍛",
          title: "Meal Program",
          desc: "Daily nutritious meals (Tithi Bhojan) served with love and respect.",
          href: "/our-work"
        },
        {
          icon: "💊",
          title: "Medical Support",
          desc: "Regular health check-ups and medical assistance for residents and community.",
          href: "/our-work"
        },
        {
          icon: "🤝",
          title: "Community Service",
          desc: "Grassroots rural support and aid distribution for marginalized families.",
          href: "/our-work"
        },
        {
          icon: "📚",
          title: "Elder Support",
          desc: "Emotional care, companionship, and social programs for elderly wellbeing.",
          href: "/our-work"
        },
        {
          icon: "🌱",
          title: "Rural Development",
          desc: "Initiatives promoting dignity and self-sufficiency in rural communities.",
          href: "/our-work"
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { delay: i * 0.08, className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: item.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: item.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.href,
            className: "text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-smooth",
            children: [
              "Learn more ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionTitle,
            {
              tag: "Stories",
              title: "Elder Stories & Testimonials",
              subtitle: "Hear from the people whose lives have been touched by Aashro Seva."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: TESTIMONIALS.slice(0, 3).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedCard, { delay: i * 0.1, className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-primary/15 flex items-center justify-center text-lg font-bold text-primary", children: t.name.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed italic", children: [
              "“",
              t.quote,
              "”"
            ] })
          ] }, t.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppButton, { href: "/testimonials", variant: "outline", children: [
            "Read All Stories ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", "data-ocid": "home.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4", children: "Make a Difference Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto", children: "Every contribution, big or small, creates meaningful change in someone's life." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AppButton,
              {
                href: "/donate",
                variant: "orange",
                size: "lg",
                "data-ocid": "home.cta.donate_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }),
                  " Donate Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AppButton,
              {
                href: "/volunteer",
                variant: "white",
                size: "lg",
                "data-ocid": "home.cta.volunteer_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
                  " Volunteer With Us"
                ]
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-6 bg-muted/40 border-t border-border",
        "data-ocid": "home.contact_strip",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${ORG.phone}`,
              className: "flex items-center gap-2 hover:text-primary transition-smooth font-medium",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent" }),
                " ",
                ORG.phone
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block w-px h-4 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent" }),
            ORG.address.line1,
            ", ",
            ORG.address.line2
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block w-px h-4 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "hover:text-primary transition-smooth font-semibold text-primary",
              children: "Get in Touch →"
            }
          )
        ] }) })
      }
    )
  ] });
}
export {
  HomePage as default
};
