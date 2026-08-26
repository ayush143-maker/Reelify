export type CategoryId =
  | "hollywood" | "bollywood" | "blockbusters" | "classics"
  | "international" | "hidden-gems" | "family" | "documentaries"
  | "feel-good" | "cult";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  category: CategoryId;
  wiki?: string; // Wikipedia page title, when it differs from the movie title
}

export const CATEGORIES: Category[] = [
  { id: "hollywood", name: "Hollywood", tagline: "Iconic American cinema" },
  { id: "bollywood", name: "Bollywood", tagline: "Desi hearts, big stories" },
  { id: "blockbusters", name: "Blockbusters", tagline: "Popcorn-sized spectacles" },
  { id: "classics", name: "Classics", tagline: "Timeless, untouchable" },
  { id: "international", name: "International", tagline: "Beyond borders & language" },
  { id: "hidden-gems", name: "Hidden Gems", tagline: "Small films, huge souls" },
  { id: "family", name: "Family Night", tagline: "Couch, snacks, everyone" },
  { id: "documentaries", name: "Documentaries", tagline: "True stories, truly told" },
  { id: "feel-good", name: "Feel Good", tagline: "Warm hugs in film form" },
  { id: "cult", name: "Cult Favorites", tagline: "Weird, wild, worshipped" },
];

export const getCategory = (id: CategoryId): Category =>
  CATEGORIES.find((c) => c.id === id)!;
