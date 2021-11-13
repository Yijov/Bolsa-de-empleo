import React, { useContext, useEffect } from "react";
import { State } from "../../state/State";
import {
  BsFileEarmarkArrowUpFill,
  BsEyeFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { IJobPost } from "../../interfaces";
import { TransformableButtuon, CustomButton } from "..";

const JobRow: React.FC<{
  job: IJobPost;
}> = ({ job }) => {
  const { DISPLAY_PANNEL_API, PROFILE_API, PROFILE_STATE, AUTH_STATE } =
    useContext(State);

  const openDisplayForm = () => {
    DISPLAY_PANNEL_API.openFrom(job);
  };
  const applyToPossition = async () => {
    PROFILE_API.AppyToPossition(job);
  };

  const applied = () => {
    return job.applicants.indexOf(PROFILE_STATE._id) !== -1;
  };

  useEffect(() => {
    applied();
    // eslint-disable-next-line
  }, []);

  return (
    <tr>
      <td>{job.location}</td>
      <td>{job.position}</td>
      <td>{job.company}</td>

      {AUTH_STATE.Auth && (
        <td>
          <CustomButton
            clickAction={openDisplayForm}
            icon={<BsEyeFill />}
            text={""}
            classname={"details_button"}
          />{" "}
          <TransformableButtuon
            originIcon={<BsFileEarmarkArrowUpFill />}
            targetIcon={<BsFillCheckCircleFill />}
            originText={"Apply"}
            targetText={"Applied"}
            originClassName={"apply_button"}
            targetClassNeme={"applied_icon"}
            clickAction={applyToPossition}
            initialstate={applied()}
          />
        </td>
      )}
    </tr>
  );
};

export default JobRow;
