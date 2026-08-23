export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Olea chameleon logo">
      <defs>
        <linearGradient id="chamGrad" x1="8" y1="16" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5C6B47" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <path d="M6 54c18-4 34-4 52 0" stroke="#8A9A7B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 42c-7 1-10 9-4 12 5 2.6 10.5-1 9.5-6-.8-4-6.5-5-8-1.5" stroke="url(#chamGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M16 42c1-12 12-21 24-21 9 0 15 5 17 11l5 2c2 .8 1.6 3.4-.6 3.9l-5.4 1.2C52 45 44 48 36 48c-8 0-16-2-20-6z" fill="url(#chamGrad)" />
      <path d="M44 22c2-4 7-5 10-3-1 3-4 5-7 5z" fill="url(#chamGrad)" />
      <circle cx="47" cy="31" r="3.2" fill="#FDFBF7" />
      <circle cx="47.9" cy="31.2" r="1.5" fill="#1F2937" />
      <path d="M26 47l-2 7M40 48l2 7" stroke="url(#chamGrad)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
