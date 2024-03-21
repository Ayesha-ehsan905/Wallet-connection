import { SVGProps } from "react";

const MarketPlaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect fill="#005B41" x="4.98" y="10.96" width="7.02" height="1" />
    <rect fill="#008170" x="12" y="10.96" width="7.02" height="1" />
    <path
      fill="#005B41"
      d="M5,13v9h7V13Zm2.76,7.78H6.23V14.22H7.74Zm3.09,0H9.32V14.22h1.51Z"
    />
    <path
      fill="#008170"
      d="M12,13v9h7V13Zm2.68,7.78H13.17V14.22h1.51Zm3.09,0H16.26V14.22h1.51Z"
    />
    <path
      fill="#008170"
      d="M18.48,8.15l-3-1.52A3.71,3.71,0,0,1,12.06,9H12v1h7V9A1,1,0,0,0,18.48,8.15Z"
    />
    <path
      fill="#005B41"
      d="M11.94,9A3.71,3.71,0,0,1,8.51,6.63l-3,1.52A1,1,0,0,0,5,9V10h7V9Z"
    />
    <path
      fill="#008170"
      d="M12,2v.91h0a2.25,2.25,0,0,1,2.25,2.25v.07A2.25,2.25,0,0,1,12,7.47h0v.92A3.2,3.2,0,0,0,12,2Z"
    />
    <path
      fill="#005B41"
      d="M12,7.47A2.25,2.25,0,0,1,9.72,5.23V5.16A2.25,2.25,0,0,1,12,2.91h0V2h0a3.2,3.2,0,0,0,0,6.39h0V7.47Z"
    />
    <rect fill="#008170" x="11.54" y="3.71" width="0.91" height="2.96" />
  </svg>
);

export default MarketPlaceIcon;
