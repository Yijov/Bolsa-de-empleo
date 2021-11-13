import React, { useContext } from "react";
import { State } from "../../../state/State";
import type from "../../../config/constants/JobContractType";
const TypeInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  const getTypes = (): string[] => {
    let types: string[] = [];
    for (let item in type) {
      if (isNaN(Number(item))) {
        types.push(item);
      }
    }
    return types;
  };

  return (
    <>
      <select
        name="type"
        id="type-input"
        onChange={JOBS_POST_FORM_API.hendleInput}
        value={JOBS_POST_FORM_STATE.Job.type}
      >
        {getTypes().map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
};

export default TypeInput;
