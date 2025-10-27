
import React from 'react';

const RobotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.123 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5m-7.5 0-1.093 1.093c-.12.12-.12.313 0 .433l.22.22c.12.12.313.12.433 0L8.25 7.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5l-1.093 1.093c-.12.12-.12.313 0 .433l.22.22c.12.12.313.12.433 0L15.75 7.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 9.75v9.75a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19.5V9.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h.008v.008H8.25V12Zm3.75 0h.008v.008h-.008V12Zm3.75 0h.008v.008h-.008V12Zm-7.5 3.75h7.5" />
  </svg>
);

export default RobotIcon;
