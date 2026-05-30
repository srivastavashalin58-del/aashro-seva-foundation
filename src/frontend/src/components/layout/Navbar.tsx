import { NAV_ITEMS } from "@/constants/organization";
import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Menu, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-card border-b border-border/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="nav.home_link"
          >
            <img
              src="/assets/logo.png"
              alt="Aashro Seva Foundation"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
            />
            <div className="min-w-0">
              <span className="font-display font-bold text-primary text-base md:text-lg leading-tight block">
                Aashro Seva Foundation
              </span>
              <span className="text-xs text-muted-foreground hidden md:block">
                Serving with Care &amp; Compassion
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
                data-ocid={`nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/volunteer"
              className="flex items-center gap-1.5 px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
              data-ocid="nav.volunteer_cta"
            >
              <Users className="h-4 w-4" />
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="flex items-center gap-1.5 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-smooth shadow-warm"
              data-ocid="nav.donate_cta"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-primary/5 transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            data-ocid="nav.mobile_menu_toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                  data-ocid={`nav.mobile_${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-3 border-t border-border mt-2">
                <Link
                  to="/volunteer"
                  className="flex-1 text-center py-2.5 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
                  data-ocid="nav.mobile_volunteer_cta"
                >
                  Volunteer
                </Link>
                <Link
                  to="/donate"
                  className="flex-1 text-center py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-smooth"
                  data-ocid="nav.mobile_donate_cta"
                >
                  Donate Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
