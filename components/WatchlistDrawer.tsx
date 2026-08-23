"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
import { Movie, getCategory } from "@/types/movie";

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Movie[];
  onRemove: (id: number) => void;
}

export default function WatchlistDrawer({ isOpen, onClose, collection, onRemove }: WatchlistDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-olive-dark/25 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-grey-light bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-grey-light bg-cream-dark/50 p-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-grey-dark">My Collection</h2>
                <p className="text-xs text-grey-muted">{collection.length} films curated</p>
              </div>
              <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-grey-muted transition hover:bg-cream-dark hover:text-grey-dark">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {collection.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center opacity-60">
                  <span className="mb-4 text-4xl">🫒</span>
                  <p className="font-medium text-grey-muted">No films added yet.</p>
                  <p className="mt-1 text-sm text-grey-muted/70">Tap + on any film to curate it.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {collection.map((movie) => {
                    const cat = getCategory(movie.category);
                    return (
                      <div key={movie.id} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-olive-sm">
                        <div
                          className="flex h-14 w-11 shrink-0 items-center justify-center rounded-lg font-serif text-lg font-bold text-cream"
                          style={{ background: `linear-gradient(150deg, ${cat.gradient[0]}, ${cat.gradient[1]})` }}
                        >
                          {movie.title.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-serif text-sm font-semibold text-grey-dark">{movie.title}</p>
                          <p className="text-xs text-grey-muted">{movie.year} • ★ {movie.rating.toFixed(1)} • {cat.name}</p>
                        </div>
                        <button
                          onClick={() => onRemove(movie.id)}
                          aria-label="Remove"
                          className="shrink-0 rounded-lg p-2 text-grey-muted transition hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
