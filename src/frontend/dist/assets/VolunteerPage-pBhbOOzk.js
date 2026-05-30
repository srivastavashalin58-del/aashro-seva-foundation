import { r as reactExports, j as jsxRuntimeExports, V as VOLUNTEER_ROLES, m as motion, U as Users } from "./index-BNKBygrZ.js";
import { A as AnimatedCard } from "./AnimatedCard-CpOY2a2d.js";
import { P as PageHero } from "./PageHero-ve0-_WW3.js";
import { S as SectionTitle } from "./SectionTitle-BF7zWigc.js";
const defaultForm = {
  name: "",
  phone: "",
  email: "",
  skills: "",
  availability: "",
  message: ""
};
function VolunteerPage() {
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
        breadcrumb: "Join Us",
        title: "Become a Volunteer",
        subtitle: "Your time and compassion can transform someone's day. Join our growing family of volunteers."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "volunteer.roles_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionTitle,
            {
              tag: "Opportunities",
              title: "How You Can Volunteer",
              subtitle: "Choose an area that matches your skills, schedule, and passion."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: VOLUNTEER_ROLES.map((role, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AnimatedCard,
            {
              delay: i * 0.1,
              className: "p-6 text-center",
              "data-ocid": `volunteer.role.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: role.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground mb-2", children: role.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-3", children: role.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium", children: role.commitment })
              ]
            },
            role.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", "data-ocid": "volunteer.form_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionTitle,
        {
          tag: "Register",
          title: "Volunteer Registration",
          subtitle: "Fill in your details and we'll be in touch with the next steps."
        }
      ),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "bg-card border border-border rounded-2xl p-10 text-center shadow-warm",
          "data-ocid": "volunteer.form.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🎉" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Welcome to the Aashro Family!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Thank you for your interest in volunteering. We'll contact you shortly with next steps." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "bg-card border border-border rounded-2xl p-8 space-y-5 shadow-warm",
          "data-ocid": "volunteer.form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "text-sm font-medium text-foreground mb-1.5 block",
                    htmlFor: "vf-name",
                    children: "Full Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "vf-name",
                    name: "name",
                    required: true,
                    value: form.name,
                    onChange: handleChange,
                    className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    placeholder: "Your name",
                    "data-ocid": "volunteer.form.name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    className: "text-sm font-medium text-foreground mb-1.5 block",
                    htmlFor: "vf-phone",
                    children: "Phone Number *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "vf-phone",
                    name: "phone",
                    required: true,
                    value: form.phone,
                    onChange: handleChange,
                    className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    placeholder: "+91 xxxxx xxxxx",
                    "data-ocid": "volunteer.form.phone_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  className: "text-sm font-medium text-foreground mb-1.5 block",
                  htmlFor: "vf-email",
                  children: "Email Address"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vf-email",
                  name: "email",
                  type: "email",
                  value: form.email,
                  onChange: handleChange,
                  className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "your@email.com",
                  "data-ocid": "volunteer.form.email_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  className: "text-sm font-medium text-foreground mb-1.5 block",
                  htmlFor: "vf-skills",
                  children: "Skills / Background"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "vf-skills",
                  name: "skills",
                  value: form.skills,
                  onChange: handleChange,
                  className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "e.g. Medical, Teaching, Cooking...",
                  "data-ocid": "volunteer.form.skills_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  className: "text-sm font-medium text-foreground mb-1.5 block",
                  htmlFor: "vf-avail",
                  children: "Availability *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "vf-avail",
                  name: "availability",
                  required: true,
                  value: form.availability,
                  onChange: handleChange,
                  className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                  "data-ocid": "volunteer.form.availability_select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select availability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weekends", children: "Weekends" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weekdays", children: "Weekdays" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "flexible", children: "Flexible" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "events", children: "Event-based only" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  className: "text-sm font-medium text-foreground mb-1.5 block",
                  htmlFor: "vf-message",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "vf-message",
                  name: "message",
                  value: form.message,
                  onChange: handleChange,
                  rows: 4,
                  className: "w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none",
                  placeholder: "Tell us why you want to volunteer or any special skills...",
                  "data-ocid": "volunteer.form.message_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-smooth flex items-center justify-center gap-2",
                "data-ocid": "volunteer.form.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
                  " Register as Volunteer"
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  VolunteerPage as default
};
