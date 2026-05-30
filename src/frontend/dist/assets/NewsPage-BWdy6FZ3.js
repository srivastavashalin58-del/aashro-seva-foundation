import { c as createLucideIcon, r as reactExports, N as NEWS_ITEMS, j as jsxRuntimeExports, m as motion } from "./index-BNKBygrZ.js";
import { A as AppButton } from "./AppButton-BGoBuvRp.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { A as ArrowRight } from "./arrow-right-Cj-epoBt.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
      key: "39pd36"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]
];
const Newspaper = createLucideIcon("newspaper", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const EXTRA_NEWS = [
  {
    id: 5,
    title: "Diwali Celebration Brings Joy to Ashram Residents",
    date: "November 1, 2025",
    category: "Events",
    excerpt: "The foundation organized a heartwarming Diwali celebration with cultural programs, sweets, and fireworks for all elderly residents and volunteers.",
    image: void 0
  },
  {
    id: 6,
    title: "Volunteer Drive Welcomes 45 New Members",
    date: "October 12, 2025",
    category: "Announcements",
    excerpt: "A successful volunteer registration drive in Vadodara and Dabhoi brought 45 new compassionate individuals to support ashram activities.",
    image: void 0
  }
];
const ALL_NEWS = [...NEWS_ITEMS, ...EXTRA_NEWS];
const CATEGORIES = [
  "All",
  "Milestone",
  "Construction Update",
  "Health Initiative",
  "Legal Milestone",
  "Events",
  "Announcements"
];
const CATEGORY_COLORS = {
  Milestone: "bg-primary/10 text-primary",
  "Construction Update": "bg-amber-100 text-amber-700",
  "Health Initiative": "bg-emerald-100 text-emerald-700",
  "Legal Milestone": "bg-purple-100 text-purple-700",
  Events: "bg-accent/10 text-accent",
  Announcements: "bg-secondary/80 text-secondary-foreground"
};
function NewsCard({
  item,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.08 },
      className: "bg-card rounded-2xl overflow-hidden shadow-warm border border-border hover:shadow-lg transition-smooth group",
      "data-ocid": `news.item.${index + 1}`,
      children: [
        item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.image,
            alt: item.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-16 h-16 text-primary/30" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[item.category] ?? "bg-muted text-muted-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                  item.category
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              item.date
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3", children: item.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-smooth",
              children: [
                "Read more ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function NewsPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [visibleCount, setVisibleCount] = reactExports.useState(4);
  const filtered = activeCategory === "All" ? ALL_NEWS : ALL_NEWS.filter((n) => n.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "news.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        title: "News & Updates",
        subtitle: "Stay informed about our latest activities, milestones, and community programs.",
        breadcrumb: "Aashro Seva Foundation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap gap-2 justify-center mb-10",
          "data-ocid": "news.filter.tab",
          children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setActiveCategory(cat);
                setVisibleCount(4);
              },
              className: `px-4 py-2 rounded-full text-sm font-semibold transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-warm" : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"}`,
              "data-ocid": `news.filter.${cat.toLowerCase().replace(/\s+/g, "-")}`,
              children: cat
            },
            cat
          ))
        }
      ),
      visible.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "news.empty_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "w-16 h-16 text-muted-foreground/30 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "No news found in this category." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto", children: visible.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCard, { item, index: i }, item.id)) }),
      hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppButton,
        {
          variant: "outline",
          size: "lg",
          onClick: () => setVisibleCount((v) => v + 4),
          "data-ocid": "news.load_more_button",
          children: "Load More Stories"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-foreground mb-3", children: "Want to Stay Updated?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-xl mx-auto", children: "Follow our journey and be part of the change. Reach out to us directly for updates and involvement opportunities." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppButton,
            {
              href: "/contact",
              variant: "orange",
              size: "lg",
              "data-ocid": "news.contact_cta_button",
              children: "Get in Touch"
            }
          )
        ]
      }
    ) }) })
  ] });
}
export {
  NewsPage as default
};
