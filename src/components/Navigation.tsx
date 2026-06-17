"use client";

import { motion, useScroll } from "framer-motion";
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

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const programs: MenuItem[] = [
  {
    title: "Pre-Seed Track",
    href: "/programs",
    description: "12-week program for pre-product founders",
    icon: <Rocket className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    title: "Seed Accelerator",
    href: "/programs",
    description: "$150K investment + operational support",
    icon: <Building className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    title: "Scale Program",
    href: "/programs",
    description: "Series A readiness & expansion",
    icon: <TrendingUp className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
  },
];

const about: MenuItem[] = [
  {
    title: "Our Mission",
    href: "/about",
    description: "More than capital. A launch system.",
    icon: <Users className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
  },
  {
    title: "Impact",
    href: "/impact",
    description: "Our results speak for themselves",
    icon: <TrendingUp className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    title: "Founder Stories",
    href: "/#testimonials",
    description: "Trusted by ambitious builders",
    icon: <Users className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
  },
];

const navItems: NavItem[] = [
  { id: "stats", label: "Impact", href: "/#stats" },
  { id: "faq", label: "FAQ", href: "/#faq" },
];

function MenuCard({ item, onClick }: { item: MenuItem; onClick: (href: string) => void }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        onClick={(event) => {
          event.preventDefault();
          onClick(item.href);
        }}
        className="group block select-none space-y-2 rounded-2xl border p-3 no-underline transition-all hover:scale-[1.02] hover:border-accent/60"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="relative h-24 w-full overflow-hidden rounded-xl">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(10,30,66,0.9) 0%, rgba(10,30,66,0.3) 60%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs font-medium text-white">
            {item.icon}
            {item.title}
          </div>
        </div>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {item.description}
        </p>
      </Link>
    </NavigationMenuLink>
  );
}

function MobileMenuCard({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: (href: string) => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={(event) => {
        event.preventDefault();
        onClick(item.href);
      }}
      className="group flex items-center gap-3 rounded-2xl border p-3 transition-all hover:border-accent/60 hover:bg-accent/10"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
      >
        {item.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {item.title}
          <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { resolved, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      setMobileOpen(false);

      const isAnchor = href.startsWith("#") || href.startsWith("/#");
      if (!isAnchor) return;

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
    (href: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      navigateTo(href);
    },
    [navigateTo],
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 40);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = ["hero", "stats", "about", "programs", "testimonials", "faq", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(resolved === "dark" ? "light" : "dark");
  };

  const sectionActive = (id: string) => activeSection === id;
  const pathActive = (href: string) => pathname === href;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <motion.div
        className="relative mx-auto max-w-6xl rounded-full px-4 py-2.5 sm:px-6"
        style={{
          backgroundColor: scrolled ? "var(--bg-secondary)" : "rgba(16, 42, 84, 0.72)",
          border: scrolled ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.12)",
          boxShadow: scrolled ? "0 12px 50px rgba(0,0,0,0.22)" : "0 10px 40px rgba(0,0,0,0.16)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          overflow: "visible",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label="BlueSPACE home">
            <img src="/bih2.png" alt="BlueSPACE" className="h-8 w-auto" />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="rounded-full px-3 py-1 text-sm font-medium transition-colors"
                    style={{
                      color:
                        pathname === "/programs" || sectionActive("programs")
                          ? "var(--white)"
                          : "var(--text-secondary)",
                    }}
                  >
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-3xl p-4">
                    <ul className="grid w-[360px] gap-2 md:w-[520px] md:grid-cols-2 lg:w-[640px]">
                      {programs.map((p) => (
                        <li key={p.title}>
                          <MenuCard item={p} onClick={navigateTo} />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="rounded-full px-3 py-1 text-sm font-medium transition-colors"
                    style={{
                      color:
                        pathname === "/about" || sectionActive("about")
                          ? "var(--white)"
                          : "var(--text-secondary)",
                    }}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-3xl p-4">
                    <ul className="grid w-[320px] gap-2">
                      {about.map((a) => (
                        <li key={a.title}>
                          <MenuCard item={a} onClick={navigateTo} />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        onClick={handleNavClick(item.href)}
                        className="relative rounded-full px-3 py-2 text-sm font-medium transition-colors"
                        style={{
                          backgroundColor:
                            pathActive("/impact") || sectionActive(item.id) ? "var(--accent)" : "transparent",
                          color:
                            pathActive("/impact") || sectionActive(item.id)
                              ? "var(--white)"
                              : "var(--text-secondary)",
                        }}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      onClick={handleNavClick("/contact")}
                      className="relative rounded-full px-3 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: pathActive("/contact") ? "var(--accent)" : "transparent",
                        color: pathActive("/contact") ? "var(--white)" : "var(--text-secondary)",
                      }}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="ml-1 rounded-full"
            >
              {resolved === "dark" ? <Sun className="h-4 w-4" /> : <MoonIcon />}
            </Button>

            <Button asChild size="sm" className="ml-1 rounded-full">
              <Link href="/contact" onClick={handleNavClick("/contact")}>
                Get Started
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ color: "var(--text-secondary)" }}
            >
              {resolved === "dark" ? <Sun className="h-5 w-5" /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ color: "var(--text-primary)" }}
            >
              {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -8 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute inset-x-0 top-full mx-auto max-w-6xl px-4 pb-4"
          style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
        >
          <div
            className="overflow-hidden rounded-3xl border p-4 shadow-2xl"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-secondary)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="grid gap-2">
              <button
                type="button"
                onClick={handleNavClick("/programs")}
                className="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                Programs
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNavClick("/about")}
                className="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                About
                <ChevronRight className="h-4 w-4" />
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={handleNavClick(item.href)}
                  className="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
                  style={{
                    borderColor: sectionActive(item.id) ? "var(--accent)" : "var(--border)",
                    backgroundColor: sectionActive(item.id) ? "var(--accent)" : "transparent",
                    color: sectionActive(item.id) ? "var(--white)" : "var(--text-primary)",
                  }}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
              <button
                type="button"
                onClick={handleNavClick("/contact")}
                className="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
                style={{
                  borderColor: pathActive("/contact") ? "var(--accent)" : "var(--border)",
                  backgroundColor: pathActive("/contact") ? "var(--accent)" : "transparent",
                  color: pathActive("/contact") ? "var(--white)" : "var(--text-primary)",
                }}
              >
                Contact
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="space-y-2">
                <p className="px-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                  Programs
                </p>
                {programs.map((item) => (
                  <MobileMenuCard key={item.title} item={item} onClick={navigateTo} />
                ))}
              </div>
              <div className="space-y-2">
                <p className="px-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                  About
                </p>
                {about.map((item) => (
                  <MobileMenuCard key={item.title} item={item} onClick={navigateTo} />
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="mt-4 w-full rounded-full">
              <Link href="/contact" onClick={handleNavClick("/contact")}>
                Get Started
              </Link>
            </Button>

            {/* Social links */}
            <div className="mt-4 flex items-center justify-center gap-6 border-t pt-4" style={{ borderColor: "var(--border)" }}>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#60a5fa]" style={{ color: "var(--text-secondary)" }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="transition-colors hover:text-[#60a5fa]" style={{ color: "var(--text-secondary)" }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}
