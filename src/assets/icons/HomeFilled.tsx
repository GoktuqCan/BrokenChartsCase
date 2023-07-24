import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeFilled = (props: SvgProps) => (
  <Svg
    width={22}
    height={24}
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.132172 24.0001V8.01827L10.7867 6.10352e-05L21.4413 8.01827V24.0001H13.4913V14.4929H8.08208V24.0001H0.132172Z"
      fill={props.color || '#231F20'}
    />
  </Svg>
);
export default HomeFilled;
