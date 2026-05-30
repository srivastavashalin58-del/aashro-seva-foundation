import { NAV_ITEMS, ORG } from "@/constants/organization";
import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Aashro Seva Foundation"
                className="h-12 w-12 object-contain rounded-full bg-white/10 p-1"
              />
              <div className="min-w-0">
                <div className="font-display font-bold text-base leading-tight">
                  {ORG.name}
                </div>
                <div className="text-xs text-primary-foreground/70 mt-0.5">
                  {ORG.nameGujarati}
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-3 leading-relaxed">
              {ORG.facilityNameGujarati}
            </p>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              {ORG.registration}
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              {ORG.taxExemption}
            </p>
            {/* Social media */}
            <div className="flex items-center gap-3 mt-5">
              {(
                [
                  {
                    Icon: FaFacebook,
                    href: ORG.social.facebook,
                    label: "Facebook",
                  },
                  {
                    Icon: FaXTwitter,
                    href: ORG.social.twitter,
                    label: "Twitter",
                  },
                  {
                    Icon: FaInstagram,
                    href: ORG.social.instagram,
                    label: "Instagram",
                  },
                  {
                    Icon: FaYoutube,
                    href: ORG.social.youtube,
                    label: "YouTube",
                  },
                ] as const
              ).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Donate Now", href: "/donate" },
                { label: "Become a Volunteer", href: "/volunteer" },
                { label: "Support Old Age Home", href: "/old-age-home" },
                { label: "Sponsor a Meal", href: "/donate" },
                { label: "Medical Aid", href: "/donate" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth flex items-center gap-1.5"
                  >
                    <Heart className="h-3 w-3 text-accent flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div>{ORG.address.line1}</div>
                  <div>{ORG.address.line2}</div>
                  <div>{ORG.address.line3}</div>
                  <div>{ORG.address.country}</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href={`tel:${ORG.phone}`}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  {ORG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${ORG.email}`}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  {ORG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <span>
            &copy; {year} {ORG.name}. All rights reserved.
          </span>
          <span>
            Built with <Heart className="inline h-3 w-3 text-accent" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="hover:text-accent transition-smooth underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
