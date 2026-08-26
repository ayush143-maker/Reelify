"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Film, Trash2, X } from "lucide-react";
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
            className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line bg-ink"
          >
            <div className="flex items-center justify-between border-b border-line p-5">
              <div>
                <h2 className="font-serif text-xl text-paper">My Collection</h2>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {String(collection.length).padStart(2, "0")} curated
                </p>
              </div>
              <button onClick={onClose} aria-label="Close" className="border border-line p-2 text-muted transition hover:border-gold-dim hover:text-paper">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {collection.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Film className="mb-4 h-8 w-8 text-line" strokeWidth={1.25} />
                  <p className="text-sm text-paper/80">No films added yet.</p>
                  <p className="mt-1 text-xs text-muted">Tap + on any film to curate it.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {collection.map((movie) => {
                    const cat = getCategory(movie.category);
                    return (
                      <div key={movie.id} className="flex items-center gap-3 border border-line bg-surface p-3">
                        <div className="flex h-14 w-10 shrink-0 items-center justify-center border border-line font-serif text-base italic text-paper/30">
                          {movie.title.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-serif text-sm text-paper">{movie.title}</p>
                          <p className="mt-0.5 truncate font-mono text-[10px] text-muted">
                            {movie.year} · {movie.rating.toFixed(1)} · {cat.name}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemove(movie.id)}
                          aria-label="Remove"
                          className="shrink-0 border border-transparent p-2 text-muted transition hover:border-line hover:text-paper"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
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
