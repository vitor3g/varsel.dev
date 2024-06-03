import * as React from "react";

function Filter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" height={20} width={20} x="0px" y="0px" {...props}>
      <path
        fill="currentColor"
        d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
      />
    </svg>
  );
}

export default Filter;
