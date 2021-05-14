import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLocation(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.25 5.75a5.25 5.25 0 00-10.5 0c0 1.04.308 2.008.829 2.824h-.006L6 15.5l4.427-6.926h-.005c.54-.843.828-1.823.828-2.824zM6 8a2.25 2.25 0 110-4.5A2.25 2.25 0 016 8z"
        fill="#FBFCFE"
      />
    </Svg>
  );
}

export default SvgLocation;
