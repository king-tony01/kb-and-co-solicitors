import * as React from "react";

const CheckCircle: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      stroke="#B48CBE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.75 9.836v.92a10 10 0 1 1-5.93-9.14m5.93 1.14-10 10.01-3-3"
    ></path>
  </svg>
);

export default CheckCircle;
