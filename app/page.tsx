"use client";

import { useState, useEffect } from "react";
import { Movie } from "@/types/movie";
import SwipeDeck from "@/components/SwipeDeck";
import WatchlistDrawer from "@/components/WatchlistDrawer";
import Header from "@/components/Header";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to load movies", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();

    const savedWatchlist = localStorage.getItem("olea-watchlist");
    if (savedWatchlist) setWatchlist(JSON.parse(savedWatchlist));
  }, []);

  useEffect(() => {
    localStorage.setItem("olea-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleSwipe = (movie: Movie, direction: "left" | "right") => {
    if (direction === "right") setWatchlist((prev) => [movie, ...prev]);
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center relative overflow-hidden">
      <Header watchlistCount={watchlist.length} onMenuClick={() => setIsDrawerOpen(true)} />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 pt-24 pb-12">
        <div className="text-center mb-8 max-w-md">
          <h2 className="text-lg font-serif text-grey-dark mb-1">Discover Your Next Watch</h2>
          <p className="text-sm text-grey-muted">Swipe right to curate, left to pass.</p>
        </div>

        {isLoading ? (
          <div className="w-[320px] h-[480px] bg-cream-dark rounded-2xl shadow-olive-sm flex flex-col items-center justify-center border border-grey-light">
            <Loader2 className="w-8 h-8 text-olive animate-spin mb-3" />
            <p className="text-sm text-grey-muted font-medium">Curating films...</p>
          </div>
        ) : (
          <SwipeDeck movies={movies} onSwipe={handleSwipe} />
        )}
      </div>

      <WatchlistDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} watchlist={watchlist} onRemove={removeFromWatchlist} />
    </main>
  );
}
