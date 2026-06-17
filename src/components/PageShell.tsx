"use client";

import { type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SocialSidebar from "@/components/SocialSidebar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <SocialSidebar />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
