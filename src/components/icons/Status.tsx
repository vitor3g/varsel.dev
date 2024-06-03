import * as React from "react";

function Status(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" height={24} width={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.717 8.341a1 1 0 01-.362-1.367 10 10 0 019.837-4.903 1 1 0 11-.239 1.986 8 8 0 00-7.87 3.922 1 1 0 01-1.366.362zM20.857 10.115a1 1 0 011.094.896 10 10 0 01-5.102 9.735 1 1 0 11-.97-1.75 8 8 0 004.082-7.787 1 1 0 01.896-1.094z"
        fill="currentColor"
      />
      <path
        d="M6.343 17.657A7.975 7.975 0 0011.98 20c.514.001.986.33 1.1.832.131.58-.264 1.153-.859 1.166a9.971 9.971 0 01-7.291-2.927 9.972 9.972 0 01-2.925-7.366c.018-.595.593-.986 1.172-.85.5.117.827.592.824 1.106a7.975 7.975 0 002.343 5.696z"
        fill="currentColor"
      />
      <circle cx={19.95} cy={4.05005} r={3} fill="#009588" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Status;
