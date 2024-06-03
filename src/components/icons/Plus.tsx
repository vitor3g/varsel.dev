import * as React from "react";

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" height={24} width={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 13.25v-2.5h-7.25V3.5h-2.5v7.25H3.5v2.5h7.25v7.25h2.5v-7.25h7.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Plus;
