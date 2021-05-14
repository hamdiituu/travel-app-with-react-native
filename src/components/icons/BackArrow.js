import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBackArrow(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.031.469a.75.75 0 010 1.062L2.561 10l8.47 8.469a.75.75 0 01-1.062 1.062l-9-9a.75.75 0 010-1.062l9-9a.75.75 0 011.062 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgBackArrow;
