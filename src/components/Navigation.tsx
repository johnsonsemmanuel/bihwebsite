"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Rocket, Users, TrendingUp, Building, Sun, Moon, X, Menu, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { EASE } from "@/lib/utils";

const programs = [
  {
    title: "Pre-Seed Track",
    href: "/programs",
    description: "12-week intensive for pre-product founders",
    icon: <Rocket className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    tag: "Idea Stage",
  },
  {
    title: "Seed Accelerator",
    href: "/programs",
    description: "$150K investment + operational support",
    icon: <Building className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    tag: "Product-Market Fit",
  },
  {
    title: "Scale Program",
    href: "/programs",
    description: "Series A readiness & expansion",
    icon: <TrendingUp className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
    tag: "Scaling",
  },
];

const about = [
  {
    title: "Our Mission",
    href: "/about",
    description: "More than capital. A launch system.",
    icon: <Users className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    tag: "Who We Are",
  },
  {
    title: "Impact",
    href: "/impact",
    description: "Our results speak for themselves",
    icon: <TrendingUp className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    tag: "Track Record",
  },
  {
    title: "Founders",
    href: "/#testimonials",
    description: "Trusted by ambitious builders",
    icon: <Users className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
    tag: "Community",
  },
];

function MenuCard({ item }: { item: typeof programs[number] }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="group block select-none space-y-2 rounded-xl border p-3 no-underline transition-all hover:scale-[1.02]"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
      >
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,30,66,0.85) 0%, rgba(10,30,66,0.3) 60%, transparent 100%)" }} />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs font-medium text-white">
            {item.icon}
            {item.title}
          </div>
          <span className="absolute top-2 right-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm">
            {item.tag}
          </span>
        </div>
        <p className="flex items-center gap-1 text-xs transition-colors group-hover:text-[#60a5fa]" style={{ color: "var(--text-secondary)" }}>
          {item.description}
          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </p>
      </Link>
    </NavigationMenuLink>
  );
}

const NAV_SECTIONS = ["hero", "about", "programs", "testimonials", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { resolved, setTheme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return () => unsub();
  }, [scrollY]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleAnchor = useCallback((id: string) => {
    setMobileOpen(false);
    smoothScrollTo(id);
  }, []);

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <motion.div
          className="mx-auto max-w-6xl rounded-full px-5 py-2.5"
          animate={{
            backgroundColor: scrolled ? "var(--bg-secondary)" : "transparent",
            borderColor: scrolled ? "var(--border)" : "transparent",
            boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.18)" : "none",
          }}
          style={{
            border: "1px solid transparent",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={() => handleAnchor("hero")} className="flex items-center">
              <img src="/bih2.png" alt="BlueSPACE" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* About anchor */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleAnchor("about")}
                      className="px-4 py-1.5 text-sm font-medium rounded-full transition-all"
                      style={{
                        color: isActive("about") ? "var(--accent)" : "var(--text-secondary)",
                        backgroundColor: isActive("about") ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "transparent",
                      }}
                    >
                      About
                    </button>
                  </NavigationMenuItem>

                  {/* Programs mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      style={{
                        color: isActive("programs") ? "var(--accent)" : "var(--text-secondary)",
                        backgroundColor: isActive("programs") ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "transparent",
                      }}
                    >
                      Programs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                          Find your stage
                        </p>
                        <ul className="grid w-[500px] gap-2 md:grid-cols-3">
                          {programs.map((p) => (
                            <li key={p.title}>
                              <MenuCard item={p} />
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 border-t pt-3 flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>Not sure which track? We'll help you choose.</span>
                          <Link href="/contact" className="text-xs font-semibold text-[#60a5fa] hover:underline flex items-center gap-1">
                            Talk to us <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger style={{ color: "var(--text-secondary)", backgroundColor: "transparent" }}>
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-4">
                        {about.map((a) => (
                          <li key={a.title}>
                            <MenuCard item={a} />
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact anchor */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleAnchor("contact")}
                      className="px-4 py-1.5 text-sm font-medium rounded-full transition-all"
                      style={{
                        color: isActive("contact") ? "var(--accent)" : "var(--text-secondary)",
                        backgroundColor: isActive("contact") ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "transparent",
                      }}
                    >
                      Contact
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button onClick={() => setTheme(resolved === "dark" ? "light" : "dark")} variant="ghost" size="icon" aria-label="Toggle theme">
                {resolved === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button asChild size="sm" className="ml-1 rounded-full">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Button onClick={() => setTheme(resolved === "dark" ? "light" : "dark")} variant="ghost" size="icon" aria-label="Toggle theme">
                {resolved === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setMobileOpen((o) => !o)}>
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10 md:hidden overflow-y-auto"
            style={{ backgroundColor: "var(--bg-primary)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col gap-1">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Programs", id: "programs" },
                { label: "Testimonials", id: "testimonials" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleAnchor(item.id)}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-left text-lg font-medium transition-colors"
                  style={{
                    color: isActive(item.id) ? "var(--accent)" : "var(--text-primary)",
                    backgroundColor: isActive(item.id) ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
                  }}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </motion.button>
              ))}
            </nav>

            <div className="mt-8 border-t pt-8" style={{ borderColor: "var(--border)" }}>
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Apply Now</Link>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {programs.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border p-3 text-center"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                >
                  <div className="mb-1 flex justify-center">{p.icon}</div>
                  <div className="text-[11px] font-medium leading-tight" style={{ color: "var(--text-primary)" }}>{p.title}</div>
                  <div className="mt-1 text-[10px]" style={{ color: "var(--text-secondary)" }}>{p.tag}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
