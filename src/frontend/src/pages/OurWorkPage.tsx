import { AnimatedCard } from "@/components/AnimatedCard";
import { AppButton } from "@/components/AppButton";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "motion/react";

const workAreas = [
  {
    icon: "🏠",
    title: "Old Age Care",
    subtitle: "Vruddhashram Seva",
    color: "bg-primary/10 text-primary",
    description:
      "Our dedicated old age home provides 24/7 care including shelter, meals, medical support, and emotional companionship. We ensure every elder lives with dignity and joy.",
    features: [
      "Safe, clean accommodation",
      "Three nutritious meals daily",
      "Regular medical check-ups",
      "Recreational and social activities",
      "Emotional support and counselling",
    ],
  },
  {
    icon: "🍽️",
    title: "Food Assistance",
    subtitle: "Tithi Bhojan Program",
    color: "bg-accent/10 text-accent",
    description:
      "Our Tithi Bhojan initiative allows individuals and families to sponsor complete meals for all ashram residents on auspicious occasions or in memory of loved ones.",
    features: [
      "Daily meal sponsorship available",
      "Festival and special event meals",
      "Memorial meal sponsorship",
      "Community feeding drives",
      "Nutritionist-planned menus",
    ],
  },
  {
    icon: "💊",
    title: "Medical Support",
    subtitle: "Healthcare Services",
    color: "bg-primary/10 text-primary",
    description:
      "Regular health camps, doctor visits, and medicine provision ensure that medical needs of our elderly residents and the surrounding community are met consistently.",
    features: [
      "Monthly health camps",
      "Medicine distribution drives",
      "Specialist doctor referrals",
      "Mental health awareness",
      "Preventive care programs",
    ],
  },
  {
    icon: "🤝",
    title: "Community Service",
    subtitle: "Grassroots Welfare",
    color: "bg-accent/10 text-accent",
    description:
      "We work extensively at the grassroots level — visiting villages, distributing aid, and organizing welfare programs for economically marginalized families.",
    features: [
      "Aid kit distribution",
      "Awareness campaigns",
      "Village outreach visits",
      "Women and elderly welfare",
      "Disaster relief support",
    ],
  },
  {
    icon: "🌾",
    title: "Rural Development",
    subtitle: "Village Level Initiatives",
    color: "bg-primary/10 text-primary",
    description:
      "We partner with local panchayats and self-help groups to promote sustainable livelihoods and community health in the rural villages around Kayavarohan.",
    features: [
      "Self-help group support",
      "Vocational guidance",
      "Sanitation programs",
      "Water access advocacy",
      "Agriculture welfare drives",
    ],
  },
  {
    icon: "💝",
    title: "Humanitarian Activities",
    subtitle: "Emergency & Special Needs",
    color: "bg-accent/10 text-accent",
    description:
      "Beyond regular programs, we respond to humanitarian crises, support families in acute distress, and organise large-scale charitable activities throughout the year.",
    features: [
      "Natural disaster response",
      "Destitute family support",
      "Child welfare referrals",
      "Clothing drives",
      "Festive celebration events",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        breadcrumb="What We Do"
        title="Our Work"
        subtitle="Comprehensive programs serving elderly residents and marginalized communities across Vadodara."
        image="/assets/generated/community-meal.dim_800x500.jpg"
      />

      <section
        className="py-16 bg-background"
        data-ocid="work.programs_section"
      >
        <div className="container mx-auto px-4">
          <SectionTitle
            tag="Programs"
            title="How We Serve"
            subtitle="Every initiative is rooted in compassion and designed for lasting impact."
          />
          <div className="space-y-12">
            {workAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                data-ocid={`work.program.item.${i + 1}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl mb-4 ${area.color.split(" ")[0]}`}
                  >
                    {area.icon}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    {area.subtitle}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-muted/40 rounded-2xl p-10 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <span className="text-8xl">{area.icon}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">
            Support Our Programs
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Your donation directly funds these programs. Every contribution
            makes a tangible difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton
              href="/donate"
              variant="orange"
              size="lg"
              data-ocid="work.cta.donate_button"
            >
              Donate Now
            </AppButton>
            <AppButton
              href="/volunteer"
              variant="white"
              size="lg"
              data-ocid="work.cta.volunteer_button"
            >
              Volunteer With Us
            </AppButton>
          </div>
        </div>
      </section>
    </>
  );
}
