function PencialIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="#ffffff"
    >
      <g
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="56"
          strokeDashoffset="56"
          d="M3 21l2 -6l11 -11c1 -1 3 -1 4 0c1 1 1 3 0 4l-11 11l-6 2"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="56;0"
          />
        </path>
        <path strokeDasharray="8" strokeDashoffset="8" d="M15 5l4 4">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          />
        </path>
        <path
          strokeDasharray="6"
          strokeDashoffset="6"
          strokeWidth="1"
          d="M6 15l3 3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="6;0"
          />
        </path>
      </g>
      <path fill="#ffffff" fillOpacity="0" d="M9 18L18 9L15 6L6 15L9 18Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.8s"
          dur="0.15s"
          values="0;0.3"
        />
      </path>
    </svg>
  );
}

export default PencialIcon;
