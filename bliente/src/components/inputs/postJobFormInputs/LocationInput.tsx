import React, { useContext } from "react";
import { State } from "../../../state/State";
import Provinces from "../../../config/constants/Provinces";

const LocationInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  const getProvinces = (): string[] => {
    let provincesArray: string[] = [];
    for (let item in Provinces) {
      if (isNaN(Number(item))) {
        provincesArray.push(item);
      }
    }
    return provincesArray;
  };

  return (
    <>
      <select
        name="location"
        id="job-location-input"
        onChange={JOBS_POST_FORM_API.hendleInput}
        value={JOBS_POST_FORM_STATE.Job.location}
      >
        {getProvinces().map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
};

export default LocationInput;
