import { IClasifyedJobs, IJobPost } from "../../interfaces";

export const defaultStates = {
  JobPostFormDefault: {
    company: "",
    type: "full_time",
    logo: "",
    URL: "",
    position: "",
    location: "Distrito Nacional",
    category: "diseño",
    description: "",
    email: "",
    status: true,
    howToApply: "",
    createdAt: "",
    updatedAt: "",
    applicants: [],
  },

  ProfileDefault: {
    _id: "",
    accessLevel: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    profesion: "",
    location: "",
    phone: "",
    lastExperience: "",
    skills: [],
    studies: "",
    PostedJobs: [],
    AppliedJobs: [],
  },

  DisplayFormDefault: {
    visibility: false,
    JobToDisplay: {
      _id: "",
      ownerId: "",
      company: "",
      type: "",
      logo: "",
      URL: "",
      position: "",
      location: "",
      category: "",
      description: "",
      email: "",
      status: true,
      howToApply: "",
      createdAt: "",
      updatedAt: "",
      applicants: [],
    },
  },
};

export const GeneralInitialState = {
  AUTH_STATE: false,
  AUTH_API: false,
  AUTH_FORM_API: false,
  AUTH_FORM_STATE: false,
  JOBS_POST_FORM_API: false,
  JOBS_POST_FORM_STATE: false,
  PROFILE_API: false,
  PROFILE_STATE: false,
  JOBS_API: false,
  JOBS_STATE: [],
  DISPLAY_PANNEL_STATE: defaultStates.DisplayFormDefault,
  DISPLAY_PANNEL_API: {
    openFrom: (job: IJobPost) => {},
    closeForm: () => {},
  },
};

export type TState = {
  AUTH_API: any;
  AUTH_STATE: any;
  AUTH_FORM_API: any;
  AUTH_FORM_STATE: any;
  JOBS_POST_FORM_API: any;
  JOBS_POST_FORM_STATE: any;
  PROFILE_API: any;
  PROFILE_STATE: any;
  JOBS_API: any;
  JOBS_STATE: IClasifyedJobs[];
  DISPLAY_PANNEL_STATE: { visibility: boolean; JobToDisplay: IJobPost };
  DISPLAY_PANNEL_API: {
    openFrom: (job: IJobPost) => void;
    closeForm: () => void;
  };
};
