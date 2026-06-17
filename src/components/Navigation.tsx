"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Rocket, Users, TrendingUp, Building, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { EASE } from "@/lib/utils";

const programs = [
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

const about = [
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
    title: "Founders",
    href: "/#testimonials",
    description: "Trusted by ambitious builders",
    icon: <Users className="h-3 w-3 text-[#60a5fa]" />,
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=400&q=80",
  },
];

function MenuCard({ item }: { item: typeof programs[number] }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={item.href}
        className="group block select-none space-y-2 rounded-xl border p-3 no-underline transition-all hover:scale-[1.02]"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(10,30,66,0.85) 0%, rgba(10,30,66,0.3) 60%, transparent 100%)",
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

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { resolved, setTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 40);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleTheme = () => {
    setTheme(resolved === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <motion.div
        className="mx-auto max-w-6xl rounded-full px-6 py-3"
        style={{
          backgroundColor: scrolled ? "var(--bg-secondary)" : "transparent",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/bih2.png" alt="BlueSPACE" className="h-8 w-auto" />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {programs.map((p) => (
                        <li key={p.title}>
                          <MenuCard item={p} />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
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

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="px-4 py-1 text-sm font-medium transition-colors"
                      style={{ color: "var(--text-secondary)" }}
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
            >
              {resolved === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button asChild size="sm" className="ml-2 rounded-full">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
