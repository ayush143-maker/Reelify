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
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-olive-sm">
      <div
        className="relative aspect-[2/3] overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }}
      >
        {poster && (
          <img
            src={poster}
            alt={movie.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 text-cream">
          <span className="flex items-center gap-1 text-[11px] font-semibold">
            <Star className="h-3 w-3 fill-current" />
            {movie.rating.toFixed(1)}
          </span>
          <span className="text-[11px]">{movie.year}</span>
        </div>
        <h3 className="absolute inset-x-0 bottom-0 p-3 font-serif text-lg font-semibold leading-snug text-cream">
          {movie.title}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-2 p-3">
        <p className="min-w-0 flex-1 truncate text-[10px] uppercase tracking-wider text-grey-muted">
          {cat.name}
        </p>
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
