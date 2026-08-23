"use client";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Movie, TMDB_IMAGE_BASE } from "@/types/movie";
import { Heart, X, Star } from "lucide-react";
import { getYear } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
  onSwipe: (direction: "left" | "right") => void;
  isTop: boolean;
}

export default function MovieCard({ movie, onSwipe, isTop }: MovieCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 250], [-12, 12]);
  const likeOpacity = useTransform(x, [50, 150], [0, 1]);
  const nopeOpacity = useTransform(x, [-150, -50], [1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 120 || info.velocity.x > 500) onSwipe("right"); 
    else if (info.offset.x < -120 || info.velocity.x < -500) onSwipe("left"); 
  };

  return (
    <motion.div
      drag={isTop ? "x" : false}
      style={{ x, rotate }}
      onDragEnd={handleDragEnd}
      className={`absolute w-[320px] h-[480px] bg-white rounded-2xl shadow-olive-lg overflow-hidden select-none ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative w-full h-full">
        <img src={`${TMDB_IMAGE_BASE}${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" draggable="false" />
        <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-olive-dark/90 via-olive-dark/50 to-transparent" />

        <motion.div style={{ opacity: likeOpacity }} className="absolute top-6 left-6 border-2 border-cream/80 text-cream px-3 py-1 rounded-lg font-serif text-lg tracking-wide backdrop-blur-sm">
          <Heart className="inline mr-2 w-4 h-4" /> ADD
        </motion.div>
        <motion.div style={{ opacity: nopeOpacity }} className="absolute top-6 right-6 border-2 border-cream/80 text-cream px-3 py-1 rounded-lg font-serif text-lg tracking-wide backdrop-blur-sm">
          <X className="inline mr-2 w-4 h-4" /> SKIP
        </motion.div>

        <div className="absolute bottom-0 w-full p-6 text-cream">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-cream/70 font-medium">{getYear(movie.release_date)}</span>
            <span className="w-1 h-1 bg-cream/50 rounded-full" />
            <div className="flex items-center gap-1 text-cream/90">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs font-medium">{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold leading-tight mb-2">{movie.title}</h2>
          <p className="text-sm text-cream/80 line-clamp-3 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </motion.div>
  );
}
