import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RightArrow = (props: SvgProps) => (
  <Svg
    width={8}
    height={12}
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 0L8 6L2 12L0.935 10.935L5.87 6L0.935 1.065L2 0Z"
      fill="#999A9C"
    />
  </Svg>
);
export default RightArrow;
