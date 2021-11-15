import React, { useContext } from "react";
import { State } from "../../state/State";
import { IJobPost } from "../../interfaces";
import { Transformablebutton2 } from "..";
import { MdOutlineBlock } from "react-icons/md";
import { toast } from "react-toastify";

const Row: React.FC<{ job: IJobPost }> = ({ job }) => {
  //bringing the jobs api form the state
  const { JOBS_API, PROFILE_API } = useContext(State);

  //deactivate the post
  const deactivatePosition = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (window.confirm("¿Are you sure you wish to stop this publication?")) {
      const deactivated = await JOBS_API.deactivateJobPost(job);
      if (deactivated) {
        await PROFILE_API.getProfile();
        toast.info("your post has been deactivated");
      } else {
        toast.info(
          "we cannot complete this action at the moment, pleease try again later"
        );
      }
    }
  };

  return (
    <tr>
      <td>{job.position}</td>
      <td>{job.company}</td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td>{job.category}</td>
      <td>{job.applicants.length}</td>
      <td>
        <Transformablebutton2
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
