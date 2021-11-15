import React, { useState } from "react";
import { IconType } from "react-icons";

interface button {
  originText: string;
  targetText: string;
  originClassName: string;
  targetClassNeme: string;
  originIcon: React.ReactElement<IconType>;
  targetIcon: React.ReactElement<IconType>;
  initialstate: boolean;
  clickAction?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const TransformableButtuon2: React.FC<button> = ({
  originText,
  targetText,
  originClassName,
  targetClassNeme,
  originIcon,
  targetIcon,
  initialstate,
  clickAction,
}) => {
  const [active, setactive] = useState(initialstate);

  const transform = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (clickAction) {
      await clickAction(event);
    }
    setactive(true);
  };

  return active ? (
    <button className={targetClassNeme}>
      {targetIcon} {targetText}
    </button>
  ) : (
    <button className={originClassName} onClick={transform}>
      {originIcon} {originText}
    </button>
  );
};

export default TransformableButtuon2;
