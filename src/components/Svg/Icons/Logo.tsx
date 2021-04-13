import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0, 90, 375, 180" {...props}>
     <img src="/images/dry/DRYCAKE-logo-new.png" width="205" {...props} />
    </Svg>
  );
};

export default Icon;
