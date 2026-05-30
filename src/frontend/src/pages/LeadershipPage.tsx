import { AnimatedCard } from "@/components/AnimatedCard";
import { AppButton } from "@/components/AppButton";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        breadcrumb="Our Team"
        title="Leadership"
        subtitle="Guided by compassion and driven by purpose — meet the person leading Aashro Seva Foundation."
      />

      {/* Leader profile */}
      <section
        className="py-16 bg-background"
        data-ocid="leadership.profile_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <img
                src="/assets/generated/leader-nitinbhai.dim_400x400.jpg"
                alt="Nitinbhai Chauhan"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-elevated object-cover"
              />
              <div className="text-center mt-4">
                <h2 className="font-display font-bold text-2xl text-foreground">
                  Nitinbhai Chauhan
                </h2>
                <p className="text-accent font-semibold mt-1">
                  Managing Trustee
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Aashro Seva Foundation
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-4">
                Message from Management
              </span>
              <div className="relative mb-6">
                <Quote className="h-10 w-10 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="pl-8 text-foreground text-lg leading-relaxed font-medium italic">
                  "Every elder who comes to us carries with them a lifetime of
                  stories, wisdom, and love. It is our sacred duty to ensure
                  their remaining years are filled with dignity, care, and the
                  warmth of family. Aashro Seva Foundation is not just an
                  institution — it is a promise."
                </blockquote>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nitinbhai Chauhan has been the driving force behind Aashro
                  Seva Foundation since its inception. His unwavering commitment
                  to social welfare and elder care has shaped the foundation's
                  identity and programs from the ground up.
                </p>
                <p>
                  Under his leadership, the foundation has established a
                  functional old age home, secured 12AB tax exemption status,
                  and launched multiple community welfare programs across rural
                  Vadodara.
                </p>
                <p>
                  Nitinbhai's vision is to create a model of compassionate elder
                  care that can be replicated across Gujarat — ensuring that
                  every senior citizen, regardless of background, has access to
                  dignified care and a loving community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle tag="Looking Ahead" title="Vision for Social Impact" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Expand the Ashram",
                desc: "Complete the new residential wing to house 30 more elderly residents in dignified conditions.",
              },
              {
                icon: "💊",
                title: "Holistic Healthcare",
                desc: "Establish a dedicated medical centre within the ashram for regular and specialist care.",
              },
              {
                icon: "🌱",
                title: "Rural Outreach Scale-Up",
                desc: "Extend community welfare programs to 20+ villages in the Dabhoi and Karjan talukas.",
              },
              {
                icon: "🎓",
                title: "Youth Volunteerism",
                desc: "Create structured volunteer programs engaging college students and young professionals.",
              },
              {
                icon: "🤝",
                title: "Community Partnerships",
                desc: "Partner with local businesses, hospitals, and government bodies for sustained support.",
              },
              {
                icon: "❤️",
                title: "100 Elders Served",
                desc: "Reach the milestone of supporting 100 elderly residents with full residential care.",
              },
            ].map((item, i) => (
              <AnimatedCard key={item.title} delay={i * 0.08} className="p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Commitment */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-6">
            Our Commitment to Society
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed text-lg mb-8">
            Aashro Seva Foundation commits to full transparency, grassroots
            impact, and the unwavering belief that every human being —
            especially our elders — deserves love, respect, and care. We will
            continue to grow, serve, and inspire for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton
              href="/donate"
              variant="orange"
              size="lg"
              data-ocid="leadership.cta.donate_button"
            >
              Support Our Mission
            </AppButton>
            <AppButton
              href="/contact"
              variant="white"
              size="lg"
              data-ocid="leadership.cta.contact_button"
            >
              Get in Touch
            </AppButton>
          </div>
        </div>
      </section>
    </>
  );
}
