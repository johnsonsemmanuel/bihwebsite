export interface EventAlbum {
  id: string;
  name: string;
  year: string;
  cover: string; // first/hero photo shown on the folder card
  photos: string[];
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
  // Add new event albums here - they will automatically appear as folders
];

export const eventMap = Object.fromEntries(events.map((e) => [e.id, e]));
