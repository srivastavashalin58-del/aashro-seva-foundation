import { AppButton } from "@/components/AppButton";
import { PageHero } from "@/components/ui/PageHero";
import { ORG } from "@/constants/organization";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function SocialLink({
  icon: Icon,
  label,
  href,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-primary transition-smooth text-sm font-medium text-foreground group"
    >
      <Icon
        className={`w-5 h-5 ${color} group-hover:scale-110 transition-smooth`}
      />
      <span>{label}</span>
    </a>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div data-ocid="contact.page">
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for donations, volunteering, or any queries."
        breadcrumb="Aashro Seva Foundation"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-warm border border-border p-8">
                <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We typically respond within 24–48 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                    data-ocid="contact.success_state"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We will get back to you
                      shortly.
                    </p>
                    <AppButton
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </AppButton>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-sm"
                          data-ocid="contact.name_input"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p
                            className="text-red-500 text-xs mt-1"
                            data-ocid="contact.name_field_error"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-sm"
                          data-ocid="contact.email_input"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <p
                            className="text-red-500 text-xs mt-1"
                            data-ocid="contact.email_field_error"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Phone{" "}
                          <span className="text-muted-foreground font-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-sm"
                          data-ocid="contact.phone_input"
                          {...register("phone")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-foreground mb-1.5"
                        >
                          Subject *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-sm"
                          data-ocid="contact.subject_input"
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                        />
                        {errors.subject && (
                          <p
                            className="text-red-500 text-xs mt-1"
                            data-ocid="contact.subject_field_error"
                          >
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your inquiry, how you'd like to support, or any questions you have..."
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth text-sm resize-none"
                        data-ocid="contact.message_textarea"
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 20,
                            message: "Message must be at least 20 characters",
                          },
                        })}
                      />
                      {errors.message && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.message_field_error"
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <AppButton
                      type="submit"
                      variant="orange"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      data-ocid="contact.submit_button"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </AppButton>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="bg-card rounded-2xl shadow-warm border border-border p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${ORG.phone}`}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {ORG.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${ORG.email}`}
                        className="text-foreground font-medium hover:text-primary transition-colors break-words"
                      >
                        {ORG.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        Address
                      </p>
                      <address className="not-italic text-foreground text-sm leading-relaxed">
                        {ORG.address.line1},<br />
                        {ORG.address.line2},<br />
                        {ORG.address.line3},<br />
                        {ORG.address.country}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-2xl shadow-warm border border-border p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <SocialLink
                    icon={Facebook}
                    label="Facebook"
                    href={ORG.social.facebook}
                    color="text-blue-600"
                  />
                  <SocialLink
                    icon={Instagram}
                    label="Instagram"
                    href={ORG.social.instagram}
                    color="text-pink-500"
                  />
                  <SocialLink
                    icon={MessageCircle}
                    label="WhatsApp"
                    href={"https://wa.me/919067214745"}
                    color="text-emerald-500"
                  />
                  <SocialLink
                    icon={Linkedin}
                    label="LinkedIn"
                    href="#"
                    color="text-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0 bg-muted/40">
        <div className="container mx-auto px-4 pb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Find Us
            </h2>
            <p className="text-muted-foreground mt-2">
              Kayavarohan, Taluka Dabhoi, District Vadodara, Gujarat
            </p>
          </motion.div>
          <div
            className="rounded-2xl overflow-hidden shadow-warm border border-border"
            data-ocid="contact.map_section"
          >
            <iframe
              title="Aashro Seva Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7421.5!2d73.3!3d22.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc46b99dc15fb%3A0x5c8a9c4d6c2b3e1a!2sKayavarohan%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
