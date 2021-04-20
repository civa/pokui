import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img width="32" height="32" src="/images/24k-test/logo.svg" {...props} />;
};

export default Icon;
