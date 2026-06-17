import * as React from "react";
import { cn } from "@/lib/utils";

const GridCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-3 rounded-xl border border-border bg-bg-card p-4 transition-all hover:border-accent",
      className,
    )}
    {...props}
  />
));
GridCard.displayName = "GridCard";

export { GridCard };
