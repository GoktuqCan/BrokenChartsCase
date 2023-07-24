import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const Plate = (props: SvgProps) => (
  <Svg
    width={40}
    height={29}
    viewBox="0 0 40 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_4_1164)">
      <Path
        d="M19.2148 21.2603C15.0315 21.2603 11.6403 17.8691 11.6403 13.6858C11.6403 9.50253 15.0315 6.11133 19.2148 6.11133C23.398 6.11133 26.7892 9.50253 26.7892 13.6858C26.7892 17.8691 23.398 21.2603 19.2148 21.2603Z"
        fill="#231F20"
      />
      <Path
        d="M31.0933 25.8295L31.4895 23.6824C31.612 23.0508 33.8474 16.5009 33.9586 15.8987L34.8674 10.9713C34.9816 10.3534 32.6103 9.09087 33.0374 6.77424C33.039 6.76545 33.0412 6.75634 33.0429 6.74755H33.0421L34.1008 1.0068C34.1495 0.742645 34.4033 0.56768 34.6674 0.616426C34.9316 0.665172 35.1066 0.918913 35.0578 1.18307L33.9991 6.9243L34.6866 7.05093L35.7453 1.3101C35.7941 1.04595 36.0478 0.87098 36.312 0.919726C36.5761 0.968473 36.7511 1.22221 36.7023 1.48637L35.6436 7.22712L36.3311 7.35374L37.3898 1.6134C37.4386 1.34925 37.6923 1.17428 37.9565 1.22303C38.2206 1.27177 38.3956 1.52551 38.3468 1.78967L37.2881 7.53042L37.9756 7.65704L39.0348 1.91679C39.0836 1.65263 39.3373 1.47766 39.6015 1.52641C39.8656 1.57516 40.0406 1.8289 39.9919 2.09305L38.9331 7.8338C38.9314 7.84251 38.9306 7.8517 38.929 7.86049C38.5019 10.1767 35.836 10.5104 35.7223 11.1284L34.8135 16.0562C34.7019 16.6621 34.4589 23.5828 34.341 24.2207L33.9544 26.3173C33.9507 26.3465 33.9527 26.3749 33.9473 26.404C33.8015 27.1957 33.0411 27.719 32.2494 27.5732C31.4578 27.4273 30.9344 26.6669 31.0802 25.8753C31.0824 25.8594 31.0895 25.8452 31.0933 25.8295Z"
        fill="#231F20"
      />
      <Path
        d="M2.22616 0.00786411C3.86864 -0.190864 5.65573 3.41448 6.03569 6.55532C6.31865 8.89359 3.87401 10.0069 3.94945 10.6307C4.15567 12.3365 4.22695 12.9249 4.5515 15.6053C4.62563 16.2169 6.45732 22.8952 6.5352 23.5394L6.79146 25.656C6.79691 25.6848 6.80684 25.7115 6.81067 25.7406C6.90735 26.5397 6.33777 27.266 5.53863 27.363C4.73948 27.4597 4.01325 26.8902 3.91617 26.091C3.91405 26.0747 3.91657 26.0589 3.91535 26.0427L3.65282 23.8752C3.58113 23.2356 3.76195 16.3173 3.68822 15.7094C3.34366 12.8632 3.29907 12.4932 3.08618 10.7354C3.01074 10.1116 0.370792 9.61331 0.0878358 7.27496C-0.291718 4.13412 0.584087 0.206593 2.22616 0.00786411Z"
        fill="#231F20"
      />
      <Path
        d="M19.2145 1.74414C25.8094 1.74414 31.1561 7.09076 31.1561 13.6857C31.1561 20.2806 25.8094 25.6272 19.2145 25.6272C12.6192 25.6272 7.27301 20.2806 7.27301 13.6857C7.27301 7.09076 12.6196 1.74414 19.2145 1.74414ZM19.2145 23.2551C24.4999 23.2551 28.784 18.9706 28.784 13.6857C28.784 8.40032 24.4995 4.11619 19.2145 4.11619C13.9292 4.11619 9.64506 8.40073 9.64506 13.6857C9.64506 18.9706 13.9296 23.2551 19.2145 23.2551Z"
        fill="#231F20"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_1164">
        <Rect
          width={40}
          height={28}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Plate;