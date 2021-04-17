import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img width="32" height="32" src="/images/dry/IMG-20210318-213156-858-removebg-preview.png" {...props}/>
  );
};

export default Icon;
