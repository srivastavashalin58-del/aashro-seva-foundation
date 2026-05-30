interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
  compact?: boolean;
}

export function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact
          ? "min-h-[240px] md:min-h-[300px]"
          : "min-h-[360px] md:min-h-[440px]"
      }`}
      style={
        image
          ? {
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(135deg, oklch(0.45 0.16 265 / 0.88) 0%, oklch(0.63 0.19 70 / 0.7) 100%)"
            : "linear-gradient(135deg, oklch(0.45 0.16 265) 0%, oklch(0.35 0.18 265) 100%)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        {breadcrumb && (
          <p className="text-primary-foreground/70 text-sm mb-3 font-medium tracking-wide uppercase">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
