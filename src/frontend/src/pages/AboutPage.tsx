import { AnimatedCard } from "@/components/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ORG } from "@/constants/organization";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    desc: "We treat every individual with empathy, warmth, and unconditional care.",
  },
  {
    icon: "🤝",
    title: "Dignity",
    desc: "Every resident and community member deserves respect and dignified living.",
  },
  {
    icon: "🌱",
    title: "Service",
    desc: "Selfless service is at the heart of all our programs and activities.",
  },
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "We operate with full transparency and accountability in all endeavors.",
  },
  {
    icon: "🏘️",
    title: "Community",
    desc: "We believe in the power of collective action and community ownership.",
  },
  {
    icon: "✨",
    title: "Hope",
    desc: "We create pathways of hope for those who feel forgotten or alone.",
  },
];

const objectives = [
  "Establish and operate a dignified old age home for homeless and needy elderly persons",
  "Provide daily nutritious meals, healthcare, and emotional support to residents",
  "Conduct rural community welfare programs and aid distribution drives",
  "Create volunteer opportunities that foster compassion and social responsibility",
  "Build sustainable funding models for long-term social impact",
  "Collaborate with local government and healthcare providers for holistic care",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Who We Are"
        title="About Aashro Seva Foundation"
        subtitle="A registered public charitable trust serving humanity with dignity and compassion since its founding in Gujarat."
      />

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-3">
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl text-foreground mb-5">
                Born from a Vision of Dignity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aashro Seva Foundation was founded with a singular purpose: to
                ensure that no elderly person in our community spends their
                final years in neglect, loneliness, or poverty. Our founders
                witnessed the silent struggles of aged individuals in rural
                Gujarat and resolved to act.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Named in honor of the late Smt. Jamnaben Zaverbhai Patel, our
                primary facility —{" "}
                <strong className="text-foreground">{ORG.facilityName}</strong>{" "}
                — stands as a beacon of hope on the Dabhoi-Karjan Road in
                Kayavarohan, Vadodara.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Registered as a Public Charitable Trust under Gujarat
                jurisdiction and holding 12AB tax exemption status (verified by
                the Ahmedabad ITAT), we are accountable, transparent, and
                dedicated to genuine social impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src="/assets/generated/community-meal.dim_800x500.jpg"
                alt="Foundation in action"
                className="rounded-2xl shadow-elevated object-cover w-full h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="p-8" hover={false}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide dignified shelter, holistic care, and unwavering
                support to elderly individuals and marginalized communities in
                rural Gujarat, ensuring that every person lives with respect,
                love, and hope.
              </p>
            </AnimatedCard>
            <AnimatedCard className="p-8" hover={false} delay={0.1}>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where every elderly person is cared for with dignity,
                where communities uplift one another, and where compassionate
                service transforms lives and inspires future generations.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            tag="Goals"
            title="Our Objectives"
            subtitle="Clear, actionable goals that guide every program and initiative we run."
          />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {objectives.map((obj, i) => (
              <motion.div
                key={obj}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">
                  {obj}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle tag="What We Stand For" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedCard
                key={v.title}
                delay={i * 0.08}
                className="p-6 text-center"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Legal info */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Registration", value: ORG.registration },
              { label: "Tax Exemption", value: ORG.taxExemption },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-primary-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
