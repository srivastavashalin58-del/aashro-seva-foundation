import { AnimatedCard } from "@/components/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VOLUNTEER_ROLES } from "@/constants/organization";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type VForm = {
  name: string;
  phone: string;
  email: string;
  skills: string;
  availability: string;
  message: string;
};
const defaultForm: VForm = {
  name: "",
  phone: "",
  email: "",
  skills: "",
  availability: "",
  message: "",
};

export default function VolunteerPage() {
  const [form, setForm] = useState<VForm>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        breadcrumb="Join Us"
        title="Become a Volunteer"
        subtitle="Your time and compassion can transform someone's day. Join our growing family of volunteers."
      />

      {/* Roles */}
      <section
        className="py-16 bg-background"
        data-ocid="volunteer.roles_section"
      >
        <div className="container mx-auto px-4">
          <SectionTitle
            tag="Opportunities"
            title="How You Can Volunteer"
            subtitle="Choose an area that matches your skills, schedule, and passion."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VOLUNTEER_ROLES.map((role, i) => (
              <AnimatedCard
                key={role.title}
                delay={i * 0.1}
                className="p-6 text-center"
                data-ocid={`volunteer.role.item.${i + 1}`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {role.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {role.commitment}
                </span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-16 bg-muted/30" data-ocid="volunteer.form_section">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionTitle
            tag="Register"
            title="Volunteer Registration"
            subtitle="Fill in your details and we'll be in touch with the next steps."
          />
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-2xl p-10 text-center shadow-warm"
              data-ocid="volunteer.form.success_state"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Welcome to the Aashro Family!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your interest in volunteering. We'll contact you
                shortly with next steps.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-warm"
              data-ocid="volunteer.form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-sm font-medium text-foreground mb-1.5 block"
                    htmlFor="vf-name"
                  >
                    Full Name *
                  </label>
                  <input
                    id="vf-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                    data-ocid="volunteer.form.name_input"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-foreground mb-1.5 block"
                    htmlFor="vf-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="vf-phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 xxxxx xxxxx"
                    data-ocid="volunteer.form.phone_input"
                  />
                </div>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-foreground mb-1.5 block"
                  htmlFor="vf-email"
                >
                  Email Address
                </label>
                <input
                  id="vf-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                  data-ocid="volunteer.form.email_input"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-foreground mb-1.5 block"
                  htmlFor="vf-skills"
                >
                  Skills / Background
                </label>
                <input
                  id="vf-skills"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. Medical, Teaching, Cooking..."
                  data-ocid="volunteer.form.skills_input"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-foreground mb-1.5 block"
                  htmlFor="vf-avail"
                >
                  Availability *
                </label>
                <select
                  id="vf-avail"
                  name="availability"
                  required
                  value={form.availability}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  data-ocid="volunteer.form.availability_select"
                >
                  <option value="">Select availability</option>
                  <option value="weekends">Weekends</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="flexible">Flexible</option>
                  <option value="events">Event-based only</option>
                </select>
              </div>
              <div>
                <label
                  className="text-sm font-medium text-foreground mb-1.5 block"
                  htmlFor="vf-message"
                >
                  Message
                </label>
                <textarea
                  id="vf-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us why you want to volunteer or any special skills..."
                  data-ocid="volunteer.form.message_textarea"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-smooth flex items-center justify-center gap-2"
                data-ocid="volunteer.form.submit_button"
              >
                <Users className="h-5 w-5" /> Register as Volunteer
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
