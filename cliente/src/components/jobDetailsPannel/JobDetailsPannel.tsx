import React, { useContext } from "react";
import { State } from "../../state/State";
import { IoCloseSharp } from "react-icons/io5";

const JobDetailsPannel: React.FC = () => {
  const { DISPLAY_PANNEL_STATE, DISPLAY_PANNEL_API } = useContext(State);
  const { JobToDisplay } = DISPLAY_PANNEL_STATE;
  return (
    <div id="job-details-pannel">
      <IoCloseSharp
        className="close-button"
        onClick={DISPLAY_PANNEL_API.closeForm}
      />
      <h2>Details</h2>
      <p className="job-data">{JobToDisplay.logo}</p>
      <div id="job-data-container">
        <p className="job-data">
          {" "}
          <strong>Position Name: </strong> {JobToDisplay.position}
        </p>
        <p className="job-data">
          <strong>Company: </strong> {JobToDisplay.company}
        </p>
        <p className="job-data">
          <strong>Description: </strong> {JobToDisplay.description}
        </p>
        <p className="job-data">
          <strong>Contract type: </strong> {JobToDisplay.type}
        </p>
        <p className="job-data">
          <strong>Industry: </strong> {JobToDisplay.category}
        </p>

        <p className="job-data">
          <strong>Email: </strong>
          {JobToDisplay.email}
        </p>

        <p className="job-data">
          <strong>Apply at: </strong>
          {JobToDisplay.howToApply}
        </p>
        <p className="job-data">{JobToDisplay.URL}</p>
      </div>
    </div>
  );
};

export default JobDetailsPannel;
