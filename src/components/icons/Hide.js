import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHide(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 36 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M35.714 26.027l-16.2-25.2a1.8 1.8 0 00-3.028 0l-16.2 25.2A1.8 1.8 0 001.8 28.8h32.4a1.8 1.8 0 001.514-2.773zM18 5.129l4.803 7.471H18l-3.6 3.6-2.141-2.14 5.74-8.931z"
        fill="#F35D38"
      />
    </Svg>
  );
}

export default SvgHide;
