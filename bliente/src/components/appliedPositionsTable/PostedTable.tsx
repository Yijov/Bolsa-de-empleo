import React from "react";
import { IJobPost } from "../../interfaces";
import { TransformableButtuon } from "..";
import { MdOutlineBlock } from "react-icons/md";

const Row: React.FC<{ job: IJobPost }> = ({ job }) => {
  console.log(job);

  const deactivatePosition = () => {};
  return (
    <tr>
      <td>{job.position}</td>
      <td>{job.company}</td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td>{job.category}</td>
      <td>{job.applicants.length}</td>
      <td>
        <TransformableButtuon
          originText={"Expire"}
          targetText={"Inactive"}
          originClassName={"activated"}
          targetClassNeme={"deactivated"}
          targetIcon={<MdOutlineBlock />}
          originIcon={<MdOutlineBlock />}
          clickAction={deactivatePosition}
          initialstate={!job.status}
        />
      </td>
    </tr>
  );
};

const PostedTable: React.FC<{ Jobs: IJobPost[] }> = ({ Jobs }) => {
  return (
    <table>
      <caption>
        <h2>Positions Posted</h2>
      </caption>
      <thead>
        <tr>
          <th>Position</th>
          <th>Company</th>
          <th>Post Date</th>
          <th>Industry</th>
          <th>Applicants</th>
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

export default PostedTable;
