import React from "react";
import "../styles/front-office/front-office.css";
interface ButtonProps {
  text: string;
  variant?: "primary" | "outline" | "light";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  let className = "buttonfront cursor-pointer";

  switch (variant) {
    case "outline":
      className +=
        " buttonfronte border border-verttitle text-verttitle hover:bg-verttitle hover:bg-opacity-10";
      break;

    case "light":
      className += "bg-gray-100 text-gray-800";
      break;

    case "primary":
    default:
      className += " text-white bg-verttitle hover:bg-opacity-80";
      break;
  }
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
