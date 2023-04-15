import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import axiosInstance from '../lib/axios';
import { isAxiosErrorWithResponse } from "./axiosGuard";

export default async function requestJSON<Res = void, Req = never>(config: AxiosRequestConfig<Req>): Promise<Res> {
  try {
    const response = await axiosInstance<Res>(config);
    return response.data;
  } catch(err) {
    if(isAxiosErrorWithResponse(err)) toast.error(err.response.data.message);
    console.log(err);
    throw err;
  }
}
