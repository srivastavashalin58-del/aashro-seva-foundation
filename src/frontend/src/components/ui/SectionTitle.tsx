import { motion } from "motion/react";

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent mb-3">
          {tag}
        </span>
      )}
      <h2
        className={`font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
