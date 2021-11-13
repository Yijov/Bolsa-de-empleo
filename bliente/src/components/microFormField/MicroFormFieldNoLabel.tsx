import React, { useState } from "react";

type form = {
  information: string;
  submitAcction: React.FormEventHandler<HTMLFormElement>;
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  fieldName: string;
};

const MicroFormFieldNoLabel: React.FC<form> = ({
  information,
  submitAcction,
  inputHandler,
  fieldName,
}) => {
  const [active, SetActive] = useState<boolean>(false);

  const toggleMiniForm = () => {
    SetActive(!active);
  };

  const submitHabdler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitAcction(event);
    toggleMiniForm();
  };

  return !active ? (
    <p onDoubleClick={toggleMiniForm}>{information}</p>
  ) : (
    <form onSubmit={submitHabdler}>
      <input
        type="text"
        name={fieldName}
        value={information}
        onChange={inputHandler}
        autoFocus
      />
      <input type="submit" value="Apply" />
    </form>
  );
};

export default MicroFormFieldNoLabel;
