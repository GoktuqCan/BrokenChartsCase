import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const Music = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4_1283)">
      <Path
        d="M6.88152 6.64276V16.938C6.01372 16.6173 4.9868 16.5226 3.92992 16.7272C1.3901 17.217 -0.358698 19.2225 0.0229968 21.2066C0.405372 23.1917 2.77231 24.4031 5.31214 23.9124C7.56637 23.4787 9.19415 21.8489 9.26371 20.0968H9.27787V6.48397L21.4494 4.65147V14.788C20.581 14.4693 19.5546 14.3757 18.4978 14.5793C15.9579 15.0679 14.2097 17.0743 14.591 19.0585C14.9732 21.0426 17.3402 22.2551 19.8805 21.7644C22.1341 21.3287 23.762 19.6998 23.831 17.9488H23.8457V4.49364V0.0214844L6.88139 2.16951L6.88152 6.64276Z"
        fill="#231F20"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_1283">
        <Rect
          width={28}
          height={28}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Music;
