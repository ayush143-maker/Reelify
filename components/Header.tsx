"use client";
import { Leaf, Menu } from "lucide-react";

interface HeaderProps {
  watchlistCount: number;
  onMenuClick: () => void;
}

export default function Header({ watchlistCount, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-grey-light/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-olive rounded-full flex items-center justify-center shadow-olive-sm">
            <Leaf className="w-5 h-5 text-cream" />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-grey-dark tracking-tight">Olea</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-grey-muted -mt-1">Curated Cinema</p>
          </div>
        </div>
        <button onClick={onMenuClick} className="relative flex items-center gap-2 px-4 py-2 bg-cream-dark hover:bg-grey-light/50 border border-grey-light rounded-full transition-all duration-300 group">
          <span className="text-sm font-medium text-grey-dark">Collection</span>
          {watchlistCount > 0 && (
            <span className="flex items-center justify-center w-5 h-5 bg-olive text-cream text-xs font-bold rounded-full group-hover:scale-110 transition-transform">
              {watchlistCount}
            </span>
          )}
          <Menu className="w-4 h-4 text-grey-muted" />
        </button>
      </div>
    </header>
  );
}
