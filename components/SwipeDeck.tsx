"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface SwipeDeckProps {
  movies: Movie[];
  onSwipe: (movie: Movie, direction: "left" | "right") => void;
}

export default function SwipeDeck({ movies, onSwipe }: SwipeDeckProps) {
  const visibleMovies = movies.slice(0, 3); 

  return (
    <div className="relative w-[320px] h-[480px] flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {visibleMovies.length > 0 ? (
          [...visibleMovies].reverse().map((movie, index) => {
            const isTop = index === 0;
            const scale = 1 - (index * 0.04);
            const translateY = index * 12;

            return (
              <motion.div key={movie.id} className="absolute" style={{ zIndex: visibleMovies.length - index, scale, y: translateY }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: translateY, scale }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <MovieCard movie={movie} isTop={isTop} onSwipe={(dir) => isTop && onSwipe(movie, dir)} />
              </motion.div>
            );
          })
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="w-[320px] h-[480px] bg-cream-dark border-2 border-dashed border-olive-light rounded-2xl flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mb-4"><span className="text-3xl">🫒</span></div>
            <h3 className="text-xl font-serif text-grey-dark mb-2">Collection Complete</h3>
            <p className="text-sm text-grey-muted">You've reviewed all curated picks.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
