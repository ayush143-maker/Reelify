"use client";
import Logo from "./Logo";

interface HeaderProps {
  count: number;
  onMenuClick: () => void;
}

export default function Header({ count, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-grey-light/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <div className="leading-tight">
            <p className="font-serif text-xl font-bold text-grey-dark">Olea</p>
            <p className="text-[9px] uppercase tracking-[0.22em] text-grey-muted">Curated Cinema</p>
          </div>
        </div>
        <button
          onClick={onMenuClick}
          className="flex items-center gap-2 rounded-full border border-grey-light bg-white px-4 py-2 text-sm font-medium text-grey-dark shadow-olive-sm transition active:scale-95"
        >
          Collection
          {count > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-olive px-1 text-[11px] font-bold text-cream">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
