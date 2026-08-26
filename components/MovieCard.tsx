"use client";
import { useEffect, useState } from "react";
import { Movie, getCategory } from "@/types/movie";
import { Check, Plus, Star } from "lucide-react";

function usePoster(movie: Movie) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const key = "olea-poster:" + movie.title;
    const cached = localStorage.getItem(key);
    if (cached) {
      if (cached !== "none") setUrl(cached);
      return;
    }
    let alive = true;
    const page = movie.wiki ?? movie.title;
    fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(page.replace(/ /g, "_"))
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("not found"))))
      .then((d) => {
        if (!alive) return;
        const src: string | undefined = d?.thumbnail?.source;
        if (src) {
          const big = src.replace(/\/\d+px-/, "/500px-");
          localStorage.setItem(key, big);
          setUrl(big);
        } else {
          localStorage.setItem(key, "none");
        }
      })
      .catch(() => {
        if (alive) localStorage.setItem(key, "none");
      });
    return () => {
      alive = false;
    };
  }, [movie.title, movie.wiki]);

  return url;
}

interface MovieCardProps {
  movie: Movie;
  added: boolean;
  onToggle: () => void;
}

export default function MovieCard({ movie, added, onToggle }: MovieCardProps) {
  const cat = getCategory(movie.category);
  const poster = usePoster(movie);

  return (
    <div className="group flex flex-col border border-line bg-surface transition-colors hover:border-muted">
      <div className="relative aspect-[2/3] overflow-hidden bg-surface-raised">
        {poster ? (
          <img
            src={poster}
            alt={movie.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:grayscale-0"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-serif text-5xl italic text-paper/10">
            {movie.title.charAt(0)}
          </span>
        )}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="flex items-center gap-1 font-mono text-[10px] text-paper">
            <Star className="h-2.5 w-2.5 fill-gold text-gold" />
            {movie.rating.toFixed(1)}
          </span>
          <span className="font-mono text-[10px] text-paper/70">{movie.year}</span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 border-t border-line p-3">
        <div className="min-w-0">
          <h3 className="truncate font-serif text-[15px] leading-snug text-paper">{movie.title}</h3>
          <p className="mt-0.5 truncate text-[10px] uppercase tracking-wider2 text-muted">{cat.name}</p>
        </div>
        <button
          onClick={onToggle}
          aria-label={added ? "Remove from collection" : "Add to collection"}
          className={`flex h-7 w-7 shrink-0 items-center justify-center border transition active:scale-90 ${
            added
              ? "border-gold bg-gold text-ink"
              : "border-line text-muted hover:border-gold hover:text-gold"
          }`}
        >
          {added ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </button>
      </div>
    </div>
  );
}
