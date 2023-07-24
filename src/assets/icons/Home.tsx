import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Home = (props: SvgProps) => (
  <Svg
    width={22}
    height={24}
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.26305 21.8691H7.01666V13.4274H14.5568V21.8691H19.3104V9.08363L10.7867 2.66357L2.26305 9.08363V21.8691ZM0.132172 24V8.01821L10.7867 0L21.4413 8.01821V24H12.4259V15.5583H9.14754V24H0.132172Z"
      fill={props.color || '#999A9C'}
    />
  </Svg>
);
export default Home;
