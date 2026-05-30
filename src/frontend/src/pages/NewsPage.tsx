import { AppButton } from "@/components/AppButton";
import { PageHero } from "@/components/ui/PageHero";
import { NEWS_ITEMS } from "@/constants/organization";
import { ArrowRight, Calendar, Newspaper, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const EXTRA_NEWS = [
  {
    id: 5,
    title: "Diwali Celebration Brings Joy to Ashram Residents",
    date: "November 1, 2025",
    category: "Events",
    excerpt:
      "The foundation organized a heartwarming Diwali celebration with cultural programs, sweets, and fireworks for all elderly residents and volunteers.",
    image: undefined,
  },
  {
    id: 6,
    title: "Volunteer Drive Welcomes 45 New Members",
    date: "October 12, 2025",
    category: "Announcements",
    excerpt:
      "A successful volunteer registration drive in Vadodara and Dabhoi brought 45 new compassionate individuals to support ashram activities.",
    image: undefined,
  },
];

const ALL_NEWS = [...NEWS_ITEMS, ...EXTRA_NEWS];

const CATEGORIES = [
  "All",
  "Milestone",
  "Construction Update",
  "Health Initiative",
  "Legal Milestone",
  "Events",
  "Announcements",
];

const CATEGORY_COLORS: Record<string, string> = {
  Milestone: "bg-primary/10 text-primary",
  "Construction Update": "bg-amber-100 text-amber-700",
  "Health Initiative": "bg-emerald-100 text-emerald-700",
  "Legal Milestone": "bg-purple-100 text-purple-700",
  Events: "bg-accent/10 text-accent",
  Announcements: "bg-secondary/80 text-secondary-foreground",
};

function NewsCard({
  item,
  index,
}: { item: (typeof ALL_NEWS)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-card rounded-2xl overflow-hidden shadow-warm border border-border hover:shadow-lg transition-smooth group"
      data-ocid={`news.item.${index + 1}`}
    >
      {item.image ? (
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <Newspaper className="w-16 h-16 text-primary/30" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
              CATEGORY_COLORS[item.category] ?? "bg-muted text-muted-foreground"
            }`}
          >
            <Tag className="w-3 h-3" />
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>
        <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-smooth"
        >
          Read more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered =
    activeCategory === "All"
      ? ALL_NEWS
      : ALL_NEWS.filter((n) => n.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div data-ocid="news.page">
      <PageHero
        title="News & Updates"
        subtitle="Stay informed about our latest activities, milestones, and community programs."
        breadcrumb="Aashro Seva Foundation"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-10"
            data-ocid="news.filter.tab"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(4);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-warm"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-ocid={`news.filter.${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {visible.length === 0 ? (
            <div className="text-center py-20" data-ocid="news.empty_state">
              <Newspaper className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No news found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {visible.map((item, i) => (
                <NewsCard key={item.id} item={item} index={i} />
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <AppButton
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((v) => v + 4)}
                data-ocid="news.load_more_button"
              >
                Load More Stories
              </AppButton>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Want to Stay Updated?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Follow our journey and be part of the change. Reach out to us
              directly for updates and involvement opportunities.
            </p>
            <AppButton
              href="/contact"
              variant="orange"
              size="lg"
              data-ocid="news.contact_cta_button"
            >
              Get in Touch
            </AppButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
