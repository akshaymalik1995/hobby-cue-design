import React from "react";

export default function PlaceIcon(props: { hover: boolean }) {
  return (
    <svg
      width="24"
      height="34"
      viewBox="0 0 24 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 0.333252C5.55016 0.333252 0.333496 5.54992 0.333496 11.9999C0.333496 20.7499 12.0002 33.6666 12.0002 33.6666C12.0002 33.6666 23.6668 20.7499 23.6668 11.9999C23.6668 5.54992 18.4502 0.333252 12.0002 0.333252ZM12.0002 16.1666C9.70016 16.1666 7.8335 14.2999 7.8335 11.9999C7.8335 9.69992 9.70016 7.83325 12.0002 7.83325C14.3002 7.83325 16.1668 9.69992 16.1668 11.9999C16.1668 14.2999 14.3002 16.1666 12.0002 16.1666Z"
        fill={props.hover ? "#ffffff" : "#77933C"}
      />
    </svg>
  );
}
