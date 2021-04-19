import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img width="32" height="32" src="/images/dry/logo.png" {...props} />;
};

export default Icon;
