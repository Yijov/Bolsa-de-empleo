import React from "react";
import { IJobPost } from "../../interfaces";

const Row: React.FC<{ job: IJobPost }> = ({ job }) => {
  return (
    <tr>
      <td>{job.position}</td>
      <td>{job.company}</td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td>{(job.status && "Active") || "Closed"}</td>
    </tr>
  );
};

const AppiedTable: React.FC<{ Jobs: IJobPost[] }> = ({ Jobs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Company</th>
          <th>Appy Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {Jobs?.map((job) => (
          <Row job={job} key={Math.random()} />
        ))}
      </tbody>
    </table>
  );
};

export default AppiedTable;
