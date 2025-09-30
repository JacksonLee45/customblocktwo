import { Color, ColorPalette } from "@frontify/app-bridge";
import {  } from "@frontify/guideline-blocks-settings";
import { FC, useState } from "react";



interface ColorSwatchProps{
    color: Color
}


const ColorSwatch : FC<ColorSwatchProps> = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const rgbaColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
  
  return (
    <div className="relative inline-block">
      <div
        className="w-16 h-16 rounded-lg cursor-pointer transition-transform hover:scale-110 shadow-md"
        style={{ backgroundColor: rgbaColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap">
          {color.name}
        </div>
      )}
    </div>
  );
};

export default ColorSwatch;