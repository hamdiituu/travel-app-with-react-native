import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBike(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 36 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 2.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM29.25 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 2.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z"
        fill="#F35D38"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.125A1.125 1.125 0 0110.125 0H13.5a1.125 1.125 0 110 2.25v1.125h9.315l.868-2.606A1.125 1.125 0 0124.75 0H27a1.125 1.125 0 110 2.25h-1.44l-.7 2.104 5.344 8.55a1.125 1.125 0 01-1.908 1.192l-4.671-7.474-4.671 7.474a1.124 1.124 0 01-.954.529H6.75a1.125 1.125 0 01-.954-1.721l5.454-8.726V2.25h-1.125A1.125 1.125 0 019 1.125zm3.375 5.497L8.78 12.375h7.19l-3.595-5.753zM18 11.378l3.596-5.753h-7.191L18 11.378z"
        fill="#F35D38"
      />
    </Svg>
  );
}

export default SvgBike;
