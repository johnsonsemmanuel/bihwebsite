export interface EventAlbum {
  id: string;
  name: string;
  year: string;
  cover: string; // first/hero photo shown on the folder card
  photos: string[];
  video?: string;
}

export const events: EventAlbum[] = [
  {
    id: "talent-mixer-2025",
    name: "TalentFACTORY Mixer",
    year: "2025",
    cover: "/events/talent-mixer-2025/IMG_8261.JPG",
    photos: [
      "/events/talent-mixer-2025/IMG_8261.JPG",
      "/events/talent-mixer-2025/IMG_8262.JPG",
      "/events/talent-mixer-2025/IMG_8263.JPG",
      "/events/talent-mixer-2025/IMG_8264.JPG",
      "/events/talent-mixer-2025/IMG_8265.JPG",
      "/events/talent-mixer-2025/IMG_8266.JPG",
      "/events/talent-mixer-2025/IMG_8267.JPG",
      "/events/talent-mixer-2025/IMG_8268.JPG",
      "/events/talent-mixer-2025/IMG_8269.JPG",
    ],
  },
  {
    id: "devcon-2022",
    name: "DevCon 2022",
    year: "2022",
    cover: "/events/devcon-2022/cover.jpg",
    video: "/events/devcon-2022/VID-20221223-WA0011.mp4",
    photos: [],
  },
  {
    id: "malta-2.0",
    name: "Malta 2.0",
    year: "2024",
    cover: "/events/malta-2.0/mt-2.jpg",
    video: "/events/malta-2.0/malta-2.0.mp4",
    photos: [
      "/events/malta-2.0/mt-2.jpg",
      "/events/malta-2.0/mt-39.jpg",
      "/events/malta-2.0/mt-74.jpg",
      "/events/malta-2.0/mt-81.jpg",
      "/events/malta-2.0/mt-93.jpg",
      "/events/malta-2.0/mt-118.jpg",
      "/events/malta-2.0/mt-124.jpg",
      "/events/malta-2.0/mt-135.jpg",
      "/events/malta-2.0/mt-141.jpg",
      "/events/malta-2.0/mt-147.jpg",
      "/events/malta-2.0/mt-148.jpg",
      "/events/malta-2.0/mt-167.jpg",
      "/events/malta-2.0/mt-170.jpg",
      "/events/malta-2.0/mt-184.jpg",
    ],
  },
  // Add new event albums here - they will automatically appear as folders
];

export const eventMap = Object.fromEntries(events.map((e) => [e.id, e]));
