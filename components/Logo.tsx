export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Olea"
    >
      {/* Leaf body — closed outline */}
      <path
        d="M9 31
           C6.5 23 8.5 13.5 18 8.5
           C22.5 6.2 27.5 6.5 31.5 9
           C29.5 15.5 27 22.5 21 27.5
           C17 30.5 12 31.8 9 31 Z"
        stroke="#28282B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sketchy offset pass, for the hand-drawn feel */}
      <path
        d="M9.6 30.3
           C7.5 22.8 9.5 13.8 18.4 9.1
           C22.5 7 27 7.3 31 9.6"
        stroke="#28282B"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Midrib */}
      <path
        d="M9.5 30.5
           C14 24.5 19.5 18 28.5 10.5"
        stroke="#C9A227"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Side veins, paired along the midrib */}
      <path
        d="M14.3 25.6 L11.8 23.3
           M14.3 25.6 L16.6 24.6
           M18.6 21.2 L16.4 18.7
           M18.6 21.2 L21 20.3
           M22.6 17 L20.6 14.6
           M22.6 17 L24.8 16.3
           M26.2 13.3 L24.5 11.2"
        stroke="#C9A227"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
