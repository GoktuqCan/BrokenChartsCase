import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

const Clear = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={14} height={14} rx={7} fill="#231F20" />
    <Path
      d="M4.66384 10L4 9.33616L6.33616 7L4 4.66384L4.66384 4L7 6.33616L9.33616 4L10 4.66384L7.66384 7L10 9.33616L9.33616 10L7 7.66384L4.66384 10Z"
      fill="white"
    />
  </Svg>
);
export default Clear;
