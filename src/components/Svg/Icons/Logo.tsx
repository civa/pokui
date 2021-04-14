import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
     <img src="/images/dry/DRYCAKE-logo-new.png" width="205" {...props} />
  );
};

export default Icon;
