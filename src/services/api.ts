import axiosInstance from "../lib/axios";
import { EventCreateRequest, EventCreateResponse } from "../types/api";

export const createEvent = async (data: EventCreateRequest) => {
  const response = await axiosInstance<EventCreateResponse>({
    url: "api/v1/events",
    method: "POST",
    data,
  });
  return response.data.data;
};
