"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, Category, Movie } from "@/types/movie";
import { moviesByCategory } from "@/lib/movies";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import WatchlistDrawer from "@/components/WatchlistDrawer";

interface CategoryViewProps {
  category: Category;
  onBack: () => void;
  inCollection: (id: number) => boolean;
  onToggle: (movie: Movie) => void;
}

function CategoryView({ category, onBack, inCollection, onToggle }: CategoryViewProps) {
  const movies = moviesByCategory(category.id);
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Back to categories"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-grey-light bg-white text-grey-dark shadow-olive-sm transition active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <h2 className="truncate font-serif text-2xl font-semibold text-grey-dark">
            {category.emoji} {category.name}
          </h2>
          <p className="text-xs text-grey-muted">{category.tagline}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            added={inCollection(movie.id)}
            onToggle={() => onToggle(movie)}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [collection, setCollection] = useState<Movie[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("olea-collection");
      if (saved) {
        const parsed = JSON.parse(saved);
        setCollection(parsed.filter((m: Movie) => m && m.title && m.year && m.category));
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("olea-collection", JSON.stringify(collection));
  }, [collection]);

  const toggleCollection = (movie: Movie) => {
    setCollection((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [movie, ...prev]
    );
  };

  const inCollection = (id: number) => collection.some((m) => m.id === id);

  return (
    <main className="min-h-screen bg-cream">
      <Header count={collection.length} onMenuClick={() => setDrawerOpen(true)} />

      {activeCategory ? (
        <CategoryView
          category={activeCategory}
          onBack={() => setActiveCategory(null)}
          inCollection={inCollection}
          onToggle={toggleCollection}
        />
      ) : (
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 sm:pt-14">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="font-serif text-3xl font-semibold text-grey-dark sm:text-4xl">
              Pick a mood. Find your film.
            </h2>
            <p className="mt-2 text-sm text-grey-muted">
              Ten hand-picked shelves of cinema. Tap one, start collecting.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className="flex aspect-[4/3] flex-col justify-between rounded-2xl p-4 text-left shadow-olive-sm transition active:scale-95 sm:aspect-auto sm:min-h-[140px]"
                style={{ background: `linear-gradient(140deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }}
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span>
                  <span className="block font-serif text-lg font-semibold leading-tight text-cream">{cat.name}</span>
                  <span className="mt-0.5 block text-[11px] text-cream/70">
                    {moviesByCategory(cat.id).length} films
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      <footer className="pb-8 text-center text-xs text-grey-muted">
        Crafted with 🫒 — Olea
      </footer>

      <WatchlistDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        collection={collection}
        onRemove={(id) => setCollection((prev) => prev.filter((m) => m.id !== id))}
      />
    </main>
  );
}
