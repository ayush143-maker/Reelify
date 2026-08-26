"use client";
import Logo from "./Logo";

interface HeaderProps {
  count: number;
  onMenuClick: () => void;
}

export default function Header({ count, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <div className="leading-none">
            <p className="font-serif text-lg tracking-wide text-paper">Olea</p>
            <p className="mt-1 text-[9px] uppercase tracking-wider3 text-muted">Curated Cinema</p>
          </div>
        </div>
        <button
          onClick={onMenuClick}
          className="flex items-center gap-2.5 border border-line px-4 py-2 text-xs uppercase tracking-wider2 text-paper transition hover:border-gold-dim active:scale-[0.98]"
        >
          Collection
          {count > 0 && (
            <span className="text-gold font-mono text-[11px]">{String(count).padStart(2, "0")}</span>
          )}
        </button>
      </div>
    </header>
  );
}
