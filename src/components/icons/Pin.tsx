import * as React from "react";

function Pin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={15} width={13} {...props}>
      <path
        fill="currentColor"
        d="M12.074 4.21L8.7 8.232l.116 4.233a.4.4 0 01-.657.318L.43 6.297a.4.4 0 01.199-.702l4.196-.622L8.196.957a.63.63 0 01.887-.078l2.914 2.445a.63.63 0 01.077.887zM1.294 14.229a.713.713 0 01-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267z"
      />
    </svg>
  );
}

export default Pin;
