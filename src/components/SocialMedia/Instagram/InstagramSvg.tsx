import React from "react";
import { SvgProps } from "../..";

export interface InstagramSvgProps extends SvgProps {
  originalColors?: boolean;
  thickLinesColor?: string;
  thinLinesColor?: string;
  id?: string | number;
}

export const InstagramSvg: React.FC<InstagramSvgProps> = (props) => {
  const {
    size = 55,
    originalColors = true,
    thickLinesColor = "black",
    thinLinesColor = "white",
    id = 1,
  } = props;


  
  return (
    <>
      {/* instagram svg  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0 0 48 48"
      >
        <radialGradient
          id={`yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1_${id}`}
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stop-color={!originalColors ? thickLinesColor : "#fd5"}
          ></stop>
          <stop
            offset=".328"
            stop-color={!originalColors ? thickLinesColor : "#ff543f"}
          ></stop>
          <stop
            offset=".348"
            stop-color={!originalColors ? thickLinesColor : "#fc5245"}
          ></stop>
          <stop
            offset=".504"
            stop-color={!originalColors ? thickLinesColor : "#e64771"}
          ></stop>
          <stop
            offset=".643"
            stop-color={!originalColors ? thickLinesColor : "#d53e91"}
          ></stop>
          <stop
            offset=".761"
            stop-color={!originalColors ? thickLinesColor : "#cc39a4"}
          ></stop>
          <stop
            offset=".841"
            stop-color={!originalColors ? thickLinesColor : "#c837ab"}
          ></stop>
        </radialGradient>
        <path
          fill={`url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1_${id})`}
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id={`yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2_${id}`}
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stop-color={!originalColors ? thickLinesColor : "#4168c9"}
          ></stop>
          <stop
            offset=".999"
            stop-color={!originalColors ? thickLinesColor : "#4168c9"}
            stop-opacity="0"
          ></stop>
        </radialGradient>
        <path
          fill={`url(yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2_${id})`}
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill={!originalColors ? thinLinesColor : "#fff"}
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle
          cx="31.5"
          cy="16.5"
          r="1.5"
          fill={!originalColors ? thinLinesColor : "#fff"}
        ></circle>
        <path
          fill={!originalColors ? thinLinesColor : "#fff"}
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    </>
  );
};
