import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
  
      <img width="32" height="32" src="/images/dry/IMG-20210318-213156-858-removebg-preview.png" {...props}/>
    
  );
};

export default Logo;
