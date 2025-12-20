import * as React from "react";

const LocationMarker: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="24"
    fill="none"
    viewBox="0 0 20 24"
  >
    <path
      stroke="#B48CBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0"
    ></path>
    <path
      stroke="#B48CBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    ></path>
  </svg>
);

export default LocationMarker;
