import React, { useContext } from "react";
import { State } from "../../state/State";
import JobRow from "./JobRow";
import { IClasifyedJobs } from "../../interfaces";
import useIconAsignment from "./useIconSelect";

const PositionsList: React.FC<IClasifyedJobs> = ({
  collection,
  _id: categoryName,
}) => {
  const { AUTH_STATE } = useContext(State);
  const icon = useIconAsignment(categoryName);

  return (
    <table>
      <caption>
        <h3>
          {categoryName.toLocaleUpperCase()} {icon}
        </h3>
      </caption>
      <thead>
        <tr>
          <th>Location</th>
          <th>Position</th>
          <th>Company</th>
          {AUTH_STATE.Auth && <th>Apply/Preview</th>}
        </tr>
      </thead>
      <tbody>
        {collection.map((job) => {
          return <JobRow job={job} key={job._id} />;
        })}
      </tbody>
    </table>
  );
};

export default PositionsList;
