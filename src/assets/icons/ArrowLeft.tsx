import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowLeft = (props: SvgProps) => (
  <Svg
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 18L0 9L9 0L10.5975 1.5975L3.195 9L10.5975 16.4025L9 18Z"
      fill="#231F20"
    />
  </Svg>
);
export default ArrowLeft;
