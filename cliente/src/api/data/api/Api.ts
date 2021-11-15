import BackendConnection from "../backendConnection/BackendConnection";
import { IJobPost, IAPIResponse, IProfile } from "../../../interfaces";
import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "../../../models";

axios.defaults.withCredentials = true;

class Api extends BackendConnection {
  //log in

  public signIn = (email: string, password: string) => {
    const resolve: Promise<IAPIResponse> = axios
      .post<IAPIResponse>(this.routes.signIn, {
        email,
        password,
      })
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return resolve;
  };

  // creacte an account

  public signUp = (user: User) => {
    const solution: Promise<IAPIResponse> = axios
      .post<IAPIResponse>(this.routes.signUp, {
        ...user,
      })
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });

    return solution;
  };

  // log out

  public signOut = () => {
    const solution: Promise<IAPIResponse> = axios
      .get<IAPIResponse>(this.routes.signOut)
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  // get the list of all jabs posted

  public getJobs = () => {
    const solution: Promise<IAPIResponse> = axios
      .get<IAPIResponse>(this.routes.Jobs)
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  //post a job

  public postJob = (newJob: IJobPost) => {
    const solution: Promise<IAPIResponse> = axios
      .post<IAPIResponse>(this.routes.Jobs, {
        ...newJob,
      })
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  //update a Job post

  public updateJob = (updatedJob: IJobPost) => {
    const solution: Promise<IJobPost | IAPIResponse> = axios
      .put<IJobPost>(this.routes.Jobs + "/" + updatedJob._id, {
        ...updatedJob,
      })
      .then((response: AxiosResponse<IJobPost>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  public deactivateJobPost = (JobToDeactivate: IJobPost) => {
    const solution: Promise<IAPIResponse> = axios
      .put<IAPIResponse>(`${this.routes.Jobs}/${JobToDeactivate._id}`, {
        status: false,
      })
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  //Deleta a JobPost

  public deleteJob = (updatedJob: IJobPost) => {
    const solution: Promise<IAPIResponse> = axios
      .delete<IAPIResponse>(this.routes.Jobs + updatedJob._id)
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  //get my Profile

  public getProfile = () => {
    const solution: Promise<IAPIResponse> = axios
      .get<IAPIResponse>(this.routes.profile)
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  //modify user profile info

  public updateProfile = (newProfile: IProfile) => {
    const solution: Promise<IAPIResponse> = axios
      .put<IAPIResponse>(this.routes.profile, { ...newProfile })
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };

  public applyToPosition = (position: IJobPost) => {
    const solution: Promise<IAPIResponse> = axios
      .put<IAPIResponse>(this.routes.Apply + position._id, position)
      .then((response: AxiosResponse<IAPIResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError<IAPIResponse>) => {
        return error.response?.data!!;
      });
    return solution;
  };
}

export default new Api();
