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
    <section className="mx-auto w-full max-w-5xl px-5 pb-20 pt-8 sm:px-6">
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={onBack}
          aria-label="Back to categories"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-paper transition hover:border-gold-dim active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="min-w-0">
          <h2 className="truncate font-serif text-2xl text-paper sm:text-3xl">{category.name}</h2>
          <p className="mt-1 text-xs uppercase tracking-wider2 text-muted">{category.tagline}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-4">
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
    <main className="min-h-screen bg-ink">
      <Header count={collection.length} onMenuClick={() => setDrawerOpen(true)} />

      {activeCategory ? (
        <CategoryView
          category={activeCategory}
          onBack={() => setActiveCategory(null)}
          inCollection={inCollection}
          onToggle={toggleCollection}
        />
      ) : (
        <section className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 sm:px-6 sm:pt-20">
          <div className="mb-12 max-w-lg sm:mb-16">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-wider3 text-gold">Ten Shelves</p>
            <h2 className="font-serif text-4xl italic leading-[1.1] text-paper sm:text-5xl">
              Choose a shelf,<br />begin your collection.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-surface p-5 text-left transition-colors hover:bg-surface-raised sm:aspect-auto sm:min-h-[160px]"
              >
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-6xl italic text-paper/5 transition-colors group-hover:text-gold/10">
                  {cat.name.charAt(0)}
                </span>
                <span className="relative">
                  <span className="block font-serif text-lg leading-tight text-paper transition-colors group-hover:text-gold">
                    {cat.name}
                  </span>
                  <span className="mt-1.5 block text-[10px] uppercase tracking-wider2 text-muted">
                    {cat.tagline}
                  </span>
                  <span className="mt-3 block h-px w-5 bg-line transition-all duration-300 group-hover:w-10 group-hover:bg-gold" />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="h-6 sprocket-row" />
      <footer className="py-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-wider3 text-muted">Olea — A Curated Catalog</p>
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
