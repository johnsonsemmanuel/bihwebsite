import { Users, Zap, Code, Monitor, DollarSign } from "lucide-react";

export type IconName = "Users" | "Zap" | "Code" | "Monitor" | "DollarSign";

export const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  Users, Zap, Code, Monitor, DollarSign,
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
    description: "A powerhouse designed to refine and deploy talents where they are needed most. For startups, this means gaining access to a pool of skilled individuals, meticulously trained to meet the specific demands of the industry.",
    body: [
      "The journey begins with our TalentFACTORY — a powerhouse designed to refine and deploy talent where it is needed most.",
      "For startups, this means gaining access to a pool of skilled individuals, meticulously trained to meet the specific demands of the industry. We bridge the gap between raw potential and industry-ready professionals, ensuring every placement creates immediate value.",
      "Our talent development programmes combine technical training, soft skills development, and real-world project experience, producing graduates who are ready to contribute from day one.",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  },
  {
    id: "accelerator",
    icon: "Zap",
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
    description: "A powerful ecosystem designed to propel your startup's success through mentorship, expert networks, intensive training, and international market access via the BIX programme.",
    body: [
      "The AcceleratorFACTORY offers a powerful ecosystem designed to propel your startup's success.",
      "Gain mentorship from seasoned advisors, access a network of industry experts for personalised guidance, and participate in intensive training programmes to develop essential skills.",
      "The programme also unlocks international market potential through the BIX (Innovation Exchange) programme, facilitating global partnerships and growth opportunities. Our cohorts have raised millions in follow-on funding and expanded to markets across Europe, Asia, and the Americas.",
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
    description: "The engine room where startups without dedicated tech departments bring their visions to life through co-creation with experienced developers.",
    body: [
      "In the digital era, technology is the cornerstone of innovation. Our CodeFACTORY acts as the engine room where startups without dedicated tech departments can bring their visions to life.",
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
    description: "A learning platform for all, providing digital skills and knowledge acquisition necessary for continuous growth in the ever-evolving digital landscape.",
    body: [
      "In the ever-evolving digital landscape, the ability to learn and adapt is a prerequisite for success.",
      "Our DigitalFACTORY serves as a learning platform for all, providing digital skills and knowledge acquisition necessary for continuous growth.",
      "Whether it's mastering the intricacies of electronic procurement systems, building digital marketing capabilities, or staying updated with the latest digital trends - the DigitalFACTORY equips individuals and organisations to thrive in the digital economy.",
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
    description: "Connecting startups with investors, venture capitalists, and funding opportunities through networking events, pitch sessions, and investor matchmaking.",
    body: [
      "Access to funding is one of the most critical challenges facing African startups. The CapitalFACTORY exists to solve that.",
      "We provide assistance in connecting founders with investors, venture capitalists, and funding opportunities through curated networking events, structured pitch sessions, and direct investor matchmaking.",
      "Beyond introductions, we offer grant resource guidance and investment management support for the community - ensuring founders are not just funded, but supported through every stage of their financial journey.",
    ],
    img: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=600&q=80",
    heroImg: "https://images.unsplash.com/photo-1553729459-afe8f2e2e5b4?w=1920&q=80",
  },
];

export const factoryMap = Object.fromEntries(factories.map((f) => [f.id, f]));
