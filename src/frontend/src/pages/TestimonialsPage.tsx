import { AnimatedCard } from "@/components/AnimatedCard";
import { AppButton } from "@/components/AppButton";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/constants/organization";
import { motion } from "motion/react";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Stories"
        title="What People Say"
        subtitle="Hear directly from the people whose lives have been touched by Aashro Seva Foundation."
      />

      <section
        className="py-16 bg-background"
        data-ocid="testimonials.main_section"
      >
        <div className="container mx-auto px-4">
          <SectionTitle tag="Voices" title="Elder Stories &amp; Testimonials" />
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedCard
                key={t.id}
                delay={i * 0.1}
                className="p-8"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-accent font-medium">
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="text-6xl text-primary/10 absolute -top-4 -left-2 font-serif leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="text-muted-foreground leading-relaxed italic pl-4">
                    {t.quote}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Share story CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">💬</div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-3">
              Share Your Story
            </h2>
            <p className="text-muted-foreground mb-6">
              Have you been impacted by Aashro Seva Foundation as a resident,
              volunteer, or donor? We'd love to hear your story.
            </p>
            <AppButton
              href="/contact"
              variant="primary"
              size="lg"
              data-ocid="testimonials.cta.share_button"
            >
              Contact Us to Share
            </AppButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
