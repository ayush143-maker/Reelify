export type CategoryId =
  | "hollywood" | "bollywood" | "blockbusters" | "classics"
  | "international" | "hidden-gems" | "family" | "documentaries"
  | "feel-good" | "cult";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  emoji: string;
  gradient: [string, string];
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  tagline: string;
  category: CategoryId;
}

export const CATEGORIES: Category[] = [
  { id: "hollywood", name: "Hollywood", tagline: "Iconic American cinema", emoji: "🎬", gradient: ["#5C6B47", "#333F27"] },
  { id: "bollywood", name: "Bollywood", tagline: "Desi hearts, big stories", emoji: "🪔", gradient: ["#B4552D", "#6E2F16"] },
  { id: "blockbusters", name: "Blockbusters", tagline: "Popcorn-sized spectacles", emoji: "🍿", gradient: ["#1F6F54", "#0C3B2B"] },
  { id: "classics", name: "Classics", tagline: "Timeless, untouchable", emoji: "🏛️", gradient: ["#8A6D3B", "#4E3B1E"] },
  { id: "international", name: "International", tagline: "Beyond borders & language", emoji: "🌍", gradient: ["#4E6E81", "#273B47"] },
  { id: "hidden-gems", name: "Hidden Gems", tagline: "Small films, huge souls", emoji: "💎", gradient: ["#6D597A", "#3B2F47"] },
  { id: "family", name: "Family Night", tagline: "Couch, snacks, everyone", emoji: "🛋️", gradient: ["#C77D3A", "#7E4A1D"] },
  { id: "documentaries", name: "Documentaries", tagline: "True stories, truly told", emoji: "🎥", gradient: ["#3E7C6B", "#1E463C"] },
  { id: "feel-good", name: "Feel Good", tagline: "Warm hugs in film form", emoji: "🌤️", gradient: ["#B98A2E", "#6E5117"] },
  { id: "cult", name: "Cult Favorites", tagline: "Weird, wild, worshipped", emoji: "👁️", gradient: ["#7A4444", "#401F1F"] },
];

export const getCategory = (id: CategoryId): Category =>
  CATEGORIES.find((c) => c.id === id)!;
