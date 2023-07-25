import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const NotFound = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4_2251)">
      <Path
        d="M14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C21.7328 28 28 21.7328 28 14C28 6.26719 21.7328 0 14 0ZM3.5 14C3.5 8.19766 8.20312 3.5 14 3.5C16.3023 3.5 18.4297 4.24922 20.1578 5.50703L5.50703 20.1578C4.24922 18.4297 3.5 16.3023 3.5 14ZM14 24.5C11.6977 24.5 9.57031 23.7508 7.84219 22.493L22.493 7.84219C23.7508 9.57578 24.5 11.6977 24.5 14C24.5 19.8023 19.7969 24.5 14 24.5Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_2251">
        <Rect width={28} height={28} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NotFound;
