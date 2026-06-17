"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Building,
  ChevronDown,
  ChevronRight,
  MenuIcon,
  Rocket,
  Sun,
  TrendingUp,
  Users,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { EASE } from "@/lib/utils";

type MenuItem = {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  img: string;
};

const programs: MenuItem[] = [
  {
    title: "TalentFACTORY",
    href: "/programs",
    description: "Refine & deploy skilled talent to startups",
    icon: <Users className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
  },
  {
    title: "AcceleratorFACTORY",
    href: "/programs",
    description: "Mentorship, BIX exchange & global growth",
    icon: <Rocket className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    title: "CodeFACTORY",
    href: "/programs",
    description: "Tech co-creation for non-tech founders",
    icon: <Building className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
  },
  {
    title: "DigitalFACTORY",
    href: "/programs",
    description: "Digital skills for continuous growth",
    icon: <TrendingUp className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
  },
  {
    title: "CapitalFACTORY",
    href: "/programs",
    description: "Investor access, grants & funding support",
    icon: <TrendingUp className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
  },
];

const about: MenuItem[] = [
  {
    title: "Our Mission",
    href: "/about",
    description: "More than capital. A launch system.",
    icon: <Users className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    title: "Impact",
    href: "/impact",
    description: "Our results speak for themselves",
    icon: <TrendingUp className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    title: "Founder Stories",
    href: "/#testimonials",
    description: "Trusted by ambitious builders",
    icon: <Users className="h-3 w-3 text-[var(--accent)]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
  },
];

/* ── Desktop mega-menu card ── */
function MenuCard({ item, onClick }: { item: MenuItem; onClick: (href: string) => void }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        onClick={(e) => { e.preventDefault(); onClick(item.href); }}
        className="group block select-none space-y-2 rounded-2xl border p-3 no-underline transition-all hover:scale-[1.02] hover:border-accent/60"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
      >
        <div className="relative h-24 w-full overflow-hidden rounded-xl">
          <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0" style={{ background: "rgba(10,30,66,0.55)" }} />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs font-medium text-white">
            {item.icon}{item.title}
          </div>
        </div>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
      </Link>
    </NavigationMenuLink>
  );
}

/* ── Mobile accordion section ── */
function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: MenuItem[];
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-semibold"
        style={{ color: "var(--text-primary)", backgroundColor: "var(--bg-card)" }}
      >
        {label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4" style={{ color: "var(--text-secondary)" }} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <div className="flex flex-col gap-px">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.href); }}
                  className="flex items-center gap-3 px-4 py-3 transition-colors active:bg-white/5"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--bg-card)", color: "var(--accent)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.description}</div>
                  </div>
                  <ChevronRight className="ml-auto h-3.5 w-3.5 shrink-0" style={{ color: "var(--text-secondary)" }} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main component ── */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { theme, resolved, setTheme } = useTheme();
  const cycleTheme = () => {
    const next = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
  };
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const isAnchor = href.startsWith("#") || href.startsWith("/#");
      if (!isAnchor) { router.push(href); return; }
      const targetPath = href.startsWith("/#") ? "/" : pathname;
      const id = href.replace(/^\/?#/, "");
      setActiveSection(id);
      if (pathname !== targetPath) {
        router.push(targetPath);
        window.setTimeout(() => scrollToSection(id), 120);
        return;
      }
      scrollToSection(id);
    },
    [pathname, router, scrollToSection],
  );

  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLElement>) => { e.preventDefault(); navigateTo(href); },
    [navigateTo],
  );

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    if (pathname !== "/") { setActiveSection(null); return; }
    const ids = ["hero", "stats", "about", "programs", "testimonials", "faq", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActiveSection(top.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sectionActive = (id: string) => activeSection === id;
  const pathActive = (href: string) => pathname === href;

  const mobileLinks = [
    { label: "Impact", href: "/#stats", id: "stats" },
    { label: "FAQ", href: "/#faq", id: "faq" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5"
          style={{
            backgroundColor: scrolled ? "var(--bg-secondary)" : "color-mix(in srgb, var(--bg-secondary) 70%, transparent)",
            border: "1px solid var(--border)",
            boxShadow: scrolled ? "0 12px 50px rgba(0,0,0,0.12)" : "none",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="BlueSPACE home">
            <img src="/bih2.png" alt="BlueSPACE" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger style={{ color: sectionActive("programs") || pathActive("/programs") ? "var(--white)" : "var(--text-secondary)" }}>
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-3xl p-4">
                    <ul className="grid w-[360px] gap-2 md:w-[520px] md:grid-cols-2 lg:w-[640px]">
                      {programs.map((p) => <li key={p.title}><MenuCard item={p} onClick={navigateTo} /></li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger style={{ color: sectionActive("about") || pathActive("/about") ? "var(--white)" : "var(--text-secondary)" }}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-3xl p-4">
                    <ul className="grid w-[320px] gap-2">
                      {about.map((a) => <li key={a.title}><MenuCard item={a} onClick={navigateTo} /></li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {[{ label: "Impact", href: "/#stats", id: "stats" }, { label: "FAQ", href: "/#faq", id: "faq" }].map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} onClick={handleNavClick(item.href)} className="rounded-full px-3 py-2 text-sm font-medium transition-colors"
                        style={{ backgroundColor: sectionActive(item.id) ? "var(--accent)" : "transparent", color: sectionActive(item.id) ? "var(--white)" : "var(--text-secondary)" }}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" onClick={handleNavClick("/contact")} className="rounded-full px-3 py-2 text-sm font-medium transition-colors"
                      style={{ backgroundColor: pathActive("/contact") ? "var(--accent)" : "transparent", color: pathActive("/contact") ? "var(--white)" : "var(--text-secondary)" }}>
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle theme={theme} resolved={resolved} onToggle={cycleTheme} />
            <Button asChild size="sm" className="ml-1 rounded-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle theme={theme} resolved={resolved} onToggle={cycleTheme} />
            <button onClick={() => setMobileOpen((o) => !o)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full" style={{ color: "var(--text-primary)" }}>
              {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer - full-screen, scrollable */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}          >
            {/* Drawer header */}
            <div className="flex shrink-0 items-center justify-between border-b px-5 py-4" style={{ borderColor: "var(--border)" }}>
              <img src="/bih2.png" alt="BlueSPACE" className="h-8 w-auto" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full" style={{ color: "var(--text-primary)" }}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">

              {/* Accordion groups */}
              <MobileAccordion label="Programs" items={programs} onNavigate={navigateTo} />
              <MobileAccordion label="About" items={about} onNavigate={navigateTo} />

              {/* Flat links */}
              {mobileLinks.map((item) => (
                <button key={item.id} type="button" onClick={() => navigateTo(item.href)}
                  className="flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left text-base font-semibold transition-colors"
                  style={{
                    borderColor: sectionActive(item.id) || pathActive(item.href) ? "var(--accent)" : "var(--border)",
                    backgroundColor: sectionActive(item.id) || pathActive(item.href) ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "var(--bg-card)",
                    color: sectionActive(item.id) || pathActive(item.href) ? "var(--accent)" : "var(--text-primary)",
                  }}>
                  {item.label}
                  <ChevronRight className="h-4 w-4 opacity-40" />
                </button>
              ))}
            </div>

            {/* Fixed footer */}
            <div className="shrink-0 border-t px-4 py-5 space-y-3" style={{ borderColor: "var(--border)" }}>
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Apply Now</Link>
              </Button>
              <div className="flex items-center justify-center gap-6">
                <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" aria-label="X / Twitter" className="transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-secondary)" }}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeToggle({ theme, resolved, onToggle }: { theme: string; resolved: "dark" | "light"; onToggle: () => void }) {
  const isDark = resolved === "dark";
  const isSystem = theme === "system";
  return (
    <button
      onClick={onToggle}
      aria-label={`Theme: ${theme}. Click to cycle.`}
      title={`Current: ${theme}`}
      className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        color: isSystem ? "var(--text-secondary)" : "var(--accent)",
      }}
    >
      {isSystem ? <MonitorIcon className="h-4 w-4" /> : isDark ? <MoonIcon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H5a2 2 0 00-2 2h14a2 2 0 00-2-2h-4m0 0V3m0 14H9m0 0V3m6 0H9" />
      <rect x="2" y="3" width="20" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}
