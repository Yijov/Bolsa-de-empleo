import React from "react";
import { IJobPost } from "../../interfaces";

const Row: React.FC<{ job: IJobPost }> = ({ job }) => {
  return (
    <tr>
      <td>{job.position}</td>
      <td>{job.company}</td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td>{job.status}</td>
    </tr>
  );
};

const AppiedTable: React.FC<{ Jobs: IJobPost[] }> = ({ Jobs }) => {
  return (
    <table>
      <caption>
        <h2>Positions Applied</h2>
      </caption>
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
          <Row job={job} key={job._id} />
        ))}
      </tbody>
    </table>
  );
};

export default AppiedTable;
