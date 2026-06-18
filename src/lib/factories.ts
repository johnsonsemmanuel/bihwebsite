import { Users, Rocket, Code, Monitor, DollarSign } from "lucide-react";

export type IconName = "Users" | "Rocket" | "Code" | "Monitor" | "DollarSign";

export const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  Users, Rocket, Code, Monitor, DollarSign,
};

export interface Factory {
  id: string;
  icon: IconName;
  title: string;
  tag: string;
  sub: { name: string; description: string }[];
  description: string;
  body: string[];
  img: string;
  heroImg: string;
  featured?: boolean;
}

export const factories: Factory[] = [
  {
    id: "talent",
    icon: "Users",
    title: "TalentFACTORY",
    tag: "Talent",
    sub: [
      {
        name: "Finsoft Tech Fellow",
        description: "A fellowship programme connecting skilled tech talent with fintech and financial services startups in need of specialised expertise.",
      },
    ],
    description: "The Digital Talent Pipeline — acts as the high-volume placement engine for the studio and the broader African digital economy.",
    body: [
      "The TalentFactory acts as the high-volume placement engine for the studio and the broader African digital economy.",
      "It sources exceptional individuals from local communities and educational institutions, matches them with rigorous project requirements, and deploys them directly into critical roles within BIH-DEVS portfolio ventures or elite external organizations.",
      "Core Impact: Builds and sustains an active, specialized network of cloud engineers, product managers, data scientists, and fintech compliance experts, closing the technical execution gap across the continent.",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  },
  {
    id: "accelerator",
    icon: "Rocket",
    title: "AcceleratorFACTORY",
    tag: "Accelerator",
    featured: true,
    sub: [
      {
        name: "Startup Catalyst Program",
        description: "An intensive programme offering mentorship, funding access, and structured support to take early-stage startups from idea to investment-ready.",
      },
      {
        name: "BIX-Xchange Program",
        description: "The BlueSPACE Innovation Exchange - connecting African startups to international markets, partners, and investors through global trade missions.",
      },
    ],
    description: "Venture Creation, Scaling & Global Exchange — identifies high-potential market gaps, builds internal ventures, and bridges African innovation to international tech ecosystems.",
    body: [
      "The AcceleratorFactory is the strategic heart of BIH-DEVS. It identifies high-potential market gaps, builds internal ventures from scratch, launches MVPs, and manages equity-driven portfolios toward profitable exits.",
      "Beyond venture building, it serves as the bridge connecting African innovation to international tech ecosystems through two elite, flagship programs:",
      "BIX (BlueSPACE Innovation Xchange Program) — A cross-border exchange initiative designed for our portfolio startups and leading digital professionals. BIX expands horizons by embedding African innovators into global tech hubs and international conferences. The program has successfully deployed 3 specialized cohorts to the Startup Malta Festival and the EU Startup Summit, driving cross-continental partnerships, knowledge sharing, and global investor access.",
      "The Startup Catalyst Program — An accelerator designed to empower early-stage startups with the resources, mentorship, and strategic support they need to scale. Through a structured program, selected startups receive expert guidance, access to funding opportunities, and business development support.",
    ],
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
  },
  {
    id: "code",
    icon: "Code",
    title: "CodeFACTORY",
    tag: "Technology",
    sub: [
      {
        name: "Code Hackday",
        description: "Regular hackathon events where developers, designers, and founders collaborate to build solutions to real-world problems in 24 - 48 hours.",
      },
    ],
    description: "Platform Development Hub — creates custom, highly scalable, and reusable software architectures that underpin every BIH venture.",
    body: [
      "The technical builders. CodeFactory creates the custom, highly scalable, and reusable software architectures that underpin every BIH venture.",
      "By co-creating with the CodeFACTORY, startups gain access to experienced developers, unleashing the power of technology to propel their businesses forward.",
      "The CodeFACTORY aims to foster partnerships and co-creation initiatives, supporting startups from Ideation to Growth while developing talent and fostering collaboration across the ecosystem.",
    ],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
  },
  {
    id: "digital",
    icon: "Monitor",
    title: "DigitalFACTORY",
    tag: "Digital Skills",
    sub: [],
    description: "High-Demand Skills Development — the educational foundation that feeds the TalentFactory pipeline with immersive, industry-aligned training.",
    body: [
      "The DigitalFactory is the educational foundation that feeds the TalentFactory pipeline.",
      "It specializes in designing and delivering immersive, industry-aligned training programs that equip individuals with the exact skills required to thrive in a modern, automated economy.",
      "Core Focus Areas: Conducts workshops and certification paths focusing heavily on high-demand, frontier fields such as Full-Stack Coding, Cloud Architecture, Artificial Intelligence (AI), and Blockchain Engineering, with a strict emphasis on inclusion for underserved demographics.",
    ],
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80",
  },
  {
    id: "capital",
    icon: "DollarSign",
    title: "CapitalFACTORY",
    tag: "Funding",
    sub: [],
    description: "Capital Access & Revenue Engine — leads go-to-market strategies and manages the strategic deployment of institutional capital through the FundMatrix program.",
    body: [
      "The commercial architect. We lead go-to-market strategies and manage the strategic deployment of institutional capital through the FundMatrix program.",
      "We provide assistance in connecting founders with investors, venture capitalists, and funding opportunities through curated networking events, structured pitch sessions, and direct investor matchmaking.",
      "Beyond introductions, we offer grant resource guidance and investment management support for the community - ensuring founders are not just funded, but supported through every stage of their financial journey.",
    ],
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=1920&q=80",
  },
];

export const factoryMap = Object.fromEntries(factories.map((f) => [f.id, f]));
