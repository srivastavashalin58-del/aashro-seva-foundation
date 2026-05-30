import { r as reactExports, G as GALLERY_ITEMS, j as jsxRuntimeExports, m as motion, A as AnimatePresence, X } from "./index-BNKBygrZ.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
const categories = [
  "All",
  "Care",
  "Events",
  "Construction",
  "Community",
  "Volunteers",
  "Outreach"
];
function GalleryPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const filtered = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Media",
        title: "Photo Gallery",
        subtitle: "Glimpses of our work, our residents, and the community we serve with love."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "gallery.main_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap justify-center gap-2 mb-10",
          "data-ocid": "gallery.filter.tab",
          children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFilter(cat),
              className: `px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
              "data-ocid": `gallery.filter.${cat.toLowerCase()}_tab`,
              children: cat
            },
            cat
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.35, delay: i * 0.06 },
          className: "relative group cursor-pointer overflow-hidden rounded-xl aspect-video bg-muted",
          onClick: () => setLightbox(item.src),
          "data-ocid": `gallery.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.src,
                alt: item.alt,
                className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2 py-0.5 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-1", children: item.category }),
              item.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground text-sm font-medium", children: item.caption })
            ] }) })
          ]
        },
        item.id
      )) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-20 text-muted-foreground",
          "data-ocid": "gallery.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "📷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No photos in this category yet." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4",
        onClick: () => setLightbox(null),
        "data-ocid": "gallery.lightbox.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute top-4 right-4 p-2 bg-card rounded-full text-foreground hover:bg-muted transition-smooth",
              onClick: () => setLightbox(null),
              "aria-label": "Close lightbox",
              "data-ocid": "gallery.lightbox.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              initial: { scale: 0.85 },
              animate: { scale: 1 },
              exit: { scale: 0.85 },
              src: lightbox,
              alt: "Enlarged community event",
              className: "max-w-full max-h-[85vh] rounded-xl shadow-elevated object-contain",
              onClick: (e) => e.stopPropagation()
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  GalleryPage as default
};
