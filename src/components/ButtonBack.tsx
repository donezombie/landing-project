import Link from "next/link";
import React from "react";

interface ButtonBackProps extends React.PropsWithChildren {
  className?: string;
}

const ButtonBack = (props: ButtonBackProps) => {
  return (
    <Link
      href="/"
      className={`px-6 py-2 text-white bg-primary rounded-md flex items-center gap-3 ${
        props.className || ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
        />
      </svg>{" "}
      Back to Homepage
    </Link>
  );
};

export default ButtonBack;
