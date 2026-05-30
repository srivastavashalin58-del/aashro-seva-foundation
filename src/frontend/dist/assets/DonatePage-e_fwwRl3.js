import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, D as DONATION_OPTIONS, O as ORG, H as Heart, m as motion } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
import { C as CircleCheckBig } from "./circle-check-big-VEJcCU_z.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const defaultForm = {
  name: "",
  email: "",
  phone: "",
  amount: "",
  type: "financial",
  message: ""
};
function DonatePage() {
  const [form, setForm] = reactExports.useState(defaultForm);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        breadcrumb: "Support Us",
        title: "Make a Donation",
        subtitle: "Every contribution creates meaningful change. Support elderly care and community welfare today."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "donate.options_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionTitle,
            {
              tag: "Ways to Give",
              title: "How You Can Help",
              subtitle: "Choose how you'd like to support Aashro Seva Foundation."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: DONATION_OPTIONS.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AnimatedCard,
            {
              delay: i * 0.08,
              className: "p-6",
              "data-ocid": `donate.option.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: opt.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-1", children: opt.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent font-bold text-xl mb-2", children: opt.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: opt.description })
              ]
            },
            opt.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", "data-ocid": "donate.form_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionTitle,
          {
            tag: "Quick Donate",
            title: "Scan & Pay",
            subtitle: "Use UPI or any QR-enabled payment app to donate directly.",
            centered: false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 flex flex-col items-center shadow-warm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-48 bg-muted/60 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm text-center px-4", children: [
            "QR Code",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "(UPI / GPay / PhonePe)"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center", children: "Scan to donate instantly. All donations are tax-exempt under 80G." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Contact for details:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${ORG.phone}`,
                className: "text-primary font-semibold text-sm hover:text-accent transition-smooth",
                children: ORG.phone
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }),
            label: "12AB Verified Trust"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-accent" }),
            label: "80G Tax Benefit"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-accent" }),
            label: "100% Impact"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary" }),
            label: "ITAT Recognised"
          }
        ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 bg-card border border-border rounded-lg p-3 text-xs font-medium text-foreground",
            children: [
              b.icon,
              " ",
              b.label
            ]
          },
          b.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionTitle,
          {
            tag: "Donation Form",
            title: "Send a Contribution",
            subtitle: "Fill in your details and we'll get in touch to complete your donation.",
            centered: false
          }
        ),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "bg-card border border-border rounded-2xl p-8 text-center shadow-warm",
            "data-ocid": "donate.form.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "💚" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Thank You for Your Generosity!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "We've received your message and will reach out shortly to complete your donation." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "bg-card border border-border rounded-2xl p-8 space-y-5 shadow-warm",
            "data-ocid": "donate.form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: "text-sm font-medium text-foreground mb-1.5 block",
                      htmlFor: "dn-name",
                      children: "Full Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "dn-name",
                      name: "name",
                      required: true,
                      value: form.name,
                      onChange: handleChange,
                      className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      placeholder: "Your name",
                      "data-ocid": "donate.form.name_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: "text-sm font-medium text-foreground mb-1.5 block",
                      htmlFor: "dn-phone",
                      children: "Phone *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "dn-phone",
                      name: "phone",
                      required: true,
                      value: form.phone,
                      onChange: handleChange,
                      className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      placeholder: "+91 xxxxx xxxxx",
                      "data-ocid": "donate.form.phone_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "text-sm font-medium text-foreground mb-1.5 block",
                    htmlFor: "dn-email",
                    children: "Email"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "dn-email",
                    name: "email",
                    type: "email",
                    value: form.email,
                    onChange: handleChange,
                    className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    placeholder: "your@email.com",
                    "data-ocid": "donate.form.email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: "text-sm font-medium text-foreground mb-1.5 block",
                      htmlFor: "dn-type",
                      children: "Donation Type *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "dn-type",
                      name: "type",
                      required: true,
                      value: form.type,
                      onChange: handleChange,
                      className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      "data-ocid": "donate.form.type_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tithi-bhojan", children: "Sponsor Meals (Tithi Bhojan)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medicines", children: "Donate Medicines" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "clothes", children: "Donate Clothes" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "financial", children: "Financial Support" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "community", children: "Community Sponsorship" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: "text-sm font-medium text-foreground mb-1.5 block",
                      htmlFor: "dn-amount",
                      children: "Amount (₹)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "dn-amount",
                      name: "amount",
                      value: form.amount,
                      onChange: handleChange,
                      className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      placeholder: "e.g. 1100",
                      "data-ocid": "donate.form.amount_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "text-sm font-medium text-foreground mb-1.5 block",
                    htmlFor: "dn-message",
                    children: "Message (Optional)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "dn-message",
                    name: "message",
                    value: form.message,
                    onChange: handleChange,
                    rows: 3,
                    className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none",
                    placeholder: "Any message or dedication...",
                    "data-ocid": "donate.form.message_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "w-full py-3 bg-accent text-accent-foreground rounded-xl font-semibold text-base hover:opacity-90 transition-smooth flex items-center justify-center gap-2",
                  "data-ocid": "donate.form.submit_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }),
                    " Send Donation Request"
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  DonatePage as default
};
