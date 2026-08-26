export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  // A camera-iris mark: eight blades converging on a single point of light —
  // the moment a shutter opens on a curated frame.
  const blades = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Olea">
      <circle cx="20" cy="20" r="18.5" stroke="#28282B" strokeWidth="1" />
      {blades.map((_, i) => {
        const angle = (i * 360) / blades.length;
        return (
          <line
            key={i}
            x1="20"
            y1="20"
            x2="20"
            y2="6.5"
            stroke="#C9A227"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.85"
            transform={`rotate(${angle} 20 20)`}
          />
        );
      })}
      <circle cx="20" cy="20" r="3.5" fill="#0E0E0F" stroke="#C9A227" strokeWidth="1" />
    </svg>
  );
}
