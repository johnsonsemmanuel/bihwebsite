import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueSPACE Innovation Hub | Accelerator & Venture Studio",
  description:
    "BlueSPACE Innovation Hub accelerates early-stage ventures with strategic funding, world-class mentorship, and a network built for breakthrough growth.",
};

// Inline script runs before paint to avoid flash
const themeScript = `
(function(){
  var s = localStorage.getItem('bluespace-theme');
  var t = (s === 'dark' || s === 'light') ? s : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
