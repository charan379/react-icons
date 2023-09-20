import React from "react";
import { IconProps } from "../../types";

export const Email: React.FC<IconProps> = (props) => {
  const { size } = props;
  return (
    <>
      {/* Email Svg Logo */}
      <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="#00856F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="#00856F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

const defaultProps: IconProps = {
  size: 24,
};

Email.defaultProps = defaultProps;
