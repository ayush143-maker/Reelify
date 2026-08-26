export default function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Olea"
    >
      {/* Leaf body — single clean outline, tapered oval with pointed tip */}
      <path
        d="M10 40
           C6 30 7.5 18 16 10.5
           C20.5 6.5 27 5 33.5 6
           C35 13 34 21.5 28.5 29.5
           C23.5 36.5 16.5 40.5 10 40 Z"
        stroke="#28282B"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Midrib */}
      <path
        d="M10.8 39.3
           C16 32 21.5 24 30.5 8.5"
        stroke="#C9A227"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Side veins, symmetric pairs */}
      <path
        d="M16.5 32.8 L13.4 30.2
           M16.5 32.8 L19.3 31.6
           M20.8 27.3 L18 24.5
           M20.8 27.3 L23.5 26.2
           M24.9 21.9 L22.4 19.2
           M24.9 21.9 L27.4 20.9
           M28.6 16.7 L26.5 14.2"
        stroke="#C9A227"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
