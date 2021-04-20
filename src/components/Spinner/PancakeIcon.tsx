import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img width="90" height="90" src="/images/dry/logo.png" {...props} />;
};

export default Icon;
