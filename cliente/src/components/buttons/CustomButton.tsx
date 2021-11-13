import React from "react";
import { IconType } from "react-icons";

interface button {
  text?: string;
  classname: string;
  icon?: React.ReactElement<IconType>;
  clickAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const CustomButton: React.FC<button> = ({
  text,
  classname,
  icon,
  clickAction,
}) => {
  return (
    <button className={classname} onClick={clickAction}>
      {icon} {text}
    </button>
  );
};

export default CustomButton;
