export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Olea"
    >
      {/* Outer sketch of the leaf */}
      <path
        d="M8.5 29.5
           C7.2 20.2 11.2 11.8 21 7.2
           C27.3 4.3 32.2 6.3 32.2 6.3
           C33 13.8 30.1 22.5 23.6 27.2
           C18.4 30.9 12.8 31.2 8.5 29.5Z"
        stroke="#28282B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Slight sketch offset */}
      <path
        d="M9.2 30
           C8.3 21.5 12.4 13.1 20.8 8
           C26.6 4.7 31.4 6.5 31.8 6.8"
        stroke="#28282B"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Leaf vein / stem */}
      <path
        d="M8.8 30
           C15.1 24.6 20.2 18.5 27.8 10"
        stroke="#C9A227"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Small organic veins */}
      <path
        d="M14.2 25.6L12.8 20.8
           M17.8 22.1L16.5 17.4
           M21.2 18.5L20.4 14
           M24.2 15.2L23.8 11.8"
        stroke="#C9A227"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
