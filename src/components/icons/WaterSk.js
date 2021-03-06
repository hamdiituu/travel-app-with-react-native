import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWaterSk(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 30 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.3 3.25c0-1.2 1.05-2.4 2.4-2.4 1.35 0 2.4 1.05 2.4 2.4C8.1 4.6 6.9 5.5 5.7 5.5S3.3 4.45 3.3 3.25zm26.7.6l-.75-1.35-12 6.15L18 10l12-6.15zm-1.8 24.6l1.35 1.35c-.9.9-1.8 1.5-2.85 1.95-1.05.45-2.25.75-3.45.75H0v-1.95h4.05L7.2 25.3l-3.45-4.8-1.2-11.7c0-1.35 1.2-2.55 2.55-2.55.45 0 .9.15 1.2.3l5.25 3.9L15 9.25l1.2 2.4-5.25 2.25c-.15-.15-2.4-1.8-4.05-3.15L7.5 16l7.95 6.75 2.55 7.8h5.25c.9 0 1.8-.15 2.7-.6.9-.3 1.65-.9 2.25-1.5zm-20.7 2.1H15l-2.4-5.85-3.45-2.85 1.8 3.75-3.45 4.95z"
        fill="#F35D38"
      />
    </Svg>
  );
}

export default SvgWaterSk;
