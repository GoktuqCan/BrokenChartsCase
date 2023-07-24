import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Message = (props: SvgProps) => (
  <Svg
    width={40}
    height={29}
    viewBox="0 0 40 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.85 17.2H25.575C26.6915 17.2 27.6 16.2915 27.6 15.175V3.025C27.6 1.90855 26.6915 1 25.575 1H8.025C6.90855 1 6 1.90855 6 3.025V22.6L13.1996 17.2H20.85ZM8.7 17.065L8.9079 17.0434L8.7 17.2V17.065Z"
      fill="black"
    />
    <Path
      d="M30.975 9.09998H30.3V17.2013C30.3 18.6863 29.0944 19.8919 27.6135 19.9H14.1V20.575C14.1 21.6914 15.0085 22.6 16.125 22.6H25.8004L33 28V11.125C33 10.0085 32.0914 9.09998 30.975 9.09998Z"
      fill="black"
    />
  </Svg>
);
export default Message;
