"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Movie, TMDB_IMAGE_BASE } from "@/types/movie";
import { X, Trash2, Leaf } from "lucide-react";
import { getYear } from "@/lib/utils";

interface WatchlistDrawerProps {
  isOpen: boolean; onClose: () => void; watchlist: Movie[]; onRemove: (id: number) => void;
}

export default function WatchlistDrawer({ isOpen, onClose, watchlist, onRemove }: WatchlistDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-olive-dark/20 backdrop-blur-sm z-40" />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl z-50 flex flex-col border-l border-grey-light">
            <div className="p-6 border-b border-grey-light flex justify-between items-center bg-cream-dark/50">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-olive" />
                <div>
                  <h2 className="text-xl font-serif font-bold text-grey-dark">My Collection</h2>
                  <p className="text-xs text-grey-muted">{watchlist.length} films curated</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-cream-dark rounded-full text-grey-muted hover:text-grey-dark transition"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {watchlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                  <span className="text-4xl mb-4">🎬</span>
                  <p className="text-grey-muted font-medium">No films added yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {watchlist.map((movie) => (
                    <motion.div key={movie.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4 p-3 bg-white rounded-xl shadow-olive-sm hover:shadow-olive-md transition-shadow group">
                      <div className="w-16 h-24 rounded-lg overflow-hidden bg-grey-light flex-shrink-0">
                        {movie.poster_path ? <img src={`${TMDB_IMAGE_BASE}${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-grey-muted text-xs">No Image</div>}
                      </div>
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <h3 className="font-serif font-bold text-grey-dark text-base truncate">{movie.title}</h3>
                        <p className="text-xs text-grey-muted mt-0.5">{getYear(movie.release_date)} • ★ {movie.vote_average.toFixed(1)}</p>
                      </div>
                      <button onClick={() => onRemove(movie.id)} className="self-start p-2 text-grey-muted hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"><Trash2 size={16} /></button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
