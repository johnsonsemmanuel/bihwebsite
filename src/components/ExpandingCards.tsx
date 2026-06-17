"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<HTMLUListElement, ExpandingCardsProps>(
  ({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(defaultActiveIndex);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [pressing, setPressing] = React.useState<number | null>(null);
    const router = useRouter();

    React.useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gridStyle = React.useMemo(() => {
      if (activeIndex === null) return {};
      if (isDesktop) {
        return { gridTemplateColumns: items.map((_, i) => (i === activeIndex ? "5fr" : "1fr")).join(" ") };
      }
      return { gridTemplateRows: items.map((_, i) => (i === activeIndex ? "5fr" : "1fr")).join(" ") };
    }, [activeIndex, items.length, isDesktop]);

    return (
      <ul
        className={cn("w-full max-w-6xl gap-2 grid h-[600px] md:h-[500px]", className)}
        style={{
          ...gridStyle,
          ...(isDesktop ? { gridTemplateRows: "1fr" } : { gridTemplateColumns: "1fr" }),
          transition: "grid-template-columns 0.5s ease-out, grid-template-rows 0.5s ease-out",
        }}
        ref={ref}
        {...props}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-lg border md:min-w-[80px] min-h-0 min-w-0",
              "select-none",
            )}
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
              transform: pressing === index ? "scale(0.97)" : "scale(1)",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onMouseDown={() => setPressing(index)}
            onMouseUp={() => { setPressing(null); router.push(item.linkHref); }}
            onMouseLeave={() => setPressing(null)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setPressing(index); } }}
            onKeyUp={(e) => { if (e.key === "Enter" || e.key === " ") { setPressing(null); router.push(item.linkHref); } }}
            tabIndex={0}
            data-active={activeIndex === index}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-110 grayscale"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,30,74,0.55)" }} />
            <article className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
              <h3 className="hidden origin-left rotate-90 text-sm font-light uppercase tracking-wider text-white/80 opacity-100 transition-all duration-300 ease-out md:block group-data-[active=true]:opacity-0">
                {item.title}
              </h3>
              <div className="text-white/90 opacity-0 transition-all duration-300 delay-75 ease-out group-data-[active=true]:opacity-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white opacity-0 transition-all duration-300 delay-150 ease-out group-data-[active=true]:opacity-100">
                {item.title}
              </h3>
              <p className="w-full max-w-xs text-sm text-white/80 opacity-0 transition-all duration-300 delay-225 ease-out group-data-[active=true]:opacity-100">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    );
  },
);
ExpandingCards.displayName = "ExpandingCards";
