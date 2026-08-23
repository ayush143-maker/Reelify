"use client";
import { Movie, getCategory } from "@/types/movie";
import { Check, Plus, Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  added: boolean;
  onToggle: () => void;
}

export default function MovieCard({ movie, added, onToggle }: MovieCardProps) {
  const cat = getCategory(movie.category);
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-olive-sm">
      <div
        className="relative flex aspect-[2/3] flex-col justify-between p-3"
        style={{ background: `linear-gradient(150deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }}
      >
        <div className="flex items-center justify-between text-cream/90">
          <span className="flex items-center gap-1 text-[11px] font-semibold">
            <Star className="h-3 w-3 fill-current" />
            {movie.rating.toFixed(1)}
          </span>
          <span className="text-[11px]">{movie.year}</span>
        </div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-cream">{movie.title}</h3>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <p className="min-w-0 flex-1 truncate text-[11px] text-grey-muted">{movie.tagline}</p>
        <button
          onClick={onToggle}
          aria-label={added ? "Remove from collection" : "Add to collection"}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition active:scale-90 ${
            added ? "bg-olive text-cream" : "border border-grey-light bg-cream-dark text-olive"
          }`}
        >
          {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
