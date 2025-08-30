function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <mask id="ipTDeleteOne0">
        <g fill="none" stroke="#fff" strokeWidth="4">
          <path strokeLinejoin="round" d="m15 12l1.2-7h15.6l1.2 7" />
          <path strokeLinecap="round" d="M6 12h36" />
          <path
            fill="#555"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m37 12l-2 31H13l-2-31h26Z"
            clipRule="evenodd"
          />
          <path strokeLinecap="round" d="M19 35h10" />
        </g>
      </mask>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDeleteOne0)" />
    </svg>
  );
}

export default DeleteIcon;
