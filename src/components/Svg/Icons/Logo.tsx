import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <image width="32" height="32" href="/images/dry/IMG-20210318-213156-858-removebg-preview.png" />
    </Svg>
  );
};

export default Icon;