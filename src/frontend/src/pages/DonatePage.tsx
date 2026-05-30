import { AnimatedCard } from "@/components/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DONATION_OPTIONS, ORG } from "@/constants/organization";
import { CheckCircle, Heart, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  amount: string;
  type: string;
  message: string;
};
const defaultForm: FormState = {
  name: "",
  email: "",
  phone: "",
  amount: "",
  type: "financial",
  message: "",
};

export default function DonatePage() {
  const [form, setForm] = useState<FormState>(defaultForm);
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
        breadcrumb="Support Us"
        title="Make a Donation"
        subtitle="Every contribution creates meaningful change. Support elderly care and community welfare today."
      />

      {/* Donation options */}
      <section
        className="py-16 bg-background"
        data-ocid="donate.options_section"
      >
        <div className="container mx-auto px-4">
          <SectionTitle
            tag="Ways to Give"
            title="How You Can Help"
            subtitle="Choose how you'd like to support Aashro Seva Foundation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DONATION_OPTIONS.map((opt, i) => (
              <AnimatedCard
                key={opt.id}
                delay={i * 0.08}
                className="p-6"
                data-ocid={`donate.option.item.${i + 1}`}
              >
                <div className="text-4xl mb-3">{opt.icon}</div>
                <h3 className="font-display font-semibold text-base text-foreground mb-1">
                  {opt.title}
                </h3>
                <div className="text-accent font-bold text-xl mb-2">
                  {opt.amount}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {opt.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* QR + Form */}
      <section className="py-16 bg-muted/30" data-ocid="donate.form_section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* QR placeholder */}
            <div>
              <SectionTitle
                tag="Quick Donate"
                title="Scan &amp; Pay"
                subtitle="Use UPI or any QR-enabled payment app to donate directly."
                centered={false}
              />
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center shadow-warm">
                <div className="w-48 h-48 bg-muted/60 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-border">
                  <span className="text-muted-foreground text-sm text-center px-4">
                    QR Code
                    <br />
                    (UPI / GPay / PhonePe)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Scan to donate instantly. All donations are tax-exempt under
                  80G.
                </p>
                <div className="mt-4 text-center">
                  <div className="text-xs text-muted-foreground">
                    Contact for details:
                  </div>
                  <a
                    href={`tel:${ORG.phone}`}
                    className="text-primary font-semibold text-sm hover:text-accent transition-smooth"
                  >
                    {ORG.phone}
                  </a>
                </div>
              </div>
              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  {
                    icon: <Shield className="h-4 w-4 text-primary" />,
                    label: "12AB Verified Trust",
                  },
                  {
                    icon: <CheckCircle className="h-4 w-4 text-accent" />,
                    label: "80G Tax Benefit",
                  },
                  {
                    icon: <Heart className="h-4 w-4 text-accent" />,
                    label: "100% Impact",
                  },
                  {
                    icon: <CheckCircle className="h-4 w-4 text-primary" />,
                    label: "ITAT Recognised",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 bg-card border border-border rounded-lg p-3 text-xs font-medium text-foreground"
                  >
                    {b.icon} {b.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionTitle
                tag="Donation Form"
                title="Send a Contribution"
                subtitle="Fill in your details and we'll get in touch to complete your donation."
                centered={false}
              />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center shadow-warm"
                  data-ocid="donate.form.success_state"
                >
                  <div className="text-5xl mb-4">💚</div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We've received your message and will reach out shortly to
                    complete your donation.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-warm"
                  data-ocid="donate.form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-sm font-medium text-foreground mb-1.5 block"
                        htmlFor="dn-name"
                      >
                        Full Name *
                      </label>
                      <input
                        id="dn-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                        data-ocid="donate.form.name_input"
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-foreground mb-1.5 block"
                        htmlFor="dn-phone"
                      >
                        Phone *
                      </label>
                      <input
                        id="dn-phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 xxxxx xxxxx"
                        data-ocid="donate.form.phone_input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium text-foreground mb-1.5 block"
                      htmlFor="dn-email"
                    >
                      Email
                    </label>
                    <input
                      id="dn-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                      data-ocid="donate.form.email_input"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-sm font-medium text-foreground mb-1.5 block"
                        htmlFor="dn-type"
                      >
                        Donation Type *
                      </label>
                      <select
                        id="dn-type"
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        data-ocid="donate.form.type_select"
                      >
                        <option value="tithi-bhojan">
                          Sponsor Meals (Tithi Bhojan)
                        </option>
                        <option value="medicines">Donate Medicines</option>
                        <option value="clothes">Donate Clothes</option>
                        <option value="financial">Financial Support</option>
                        <option value="community">Community Sponsorship</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-foreground mb-1.5 block"
                        htmlFor="dn-amount"
                      >
                        Amount (₹)
                      </label>
                      <input
                        id="dn-amount"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="e.g. 1100"
                        data-ocid="donate.form.amount_input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium text-foreground mb-1.5 block"
                      htmlFor="dn-message"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="dn-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3.5 py-2.5 border border-input rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Any message or dedication..."
                      data-ocid="donate.form.message_textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-accent text-accent-foreground rounded-xl font-semibold text-base hover:opacity-90 transition-smooth flex items-center justify-center gap-2"
                    data-ocid="donate.form.submit_button"
                  >
                    <Heart className="h-5 w-5" /> Send Donation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
