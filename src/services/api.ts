import requestJSON from "../helpers/requestJSON";
import { EventCreateRequest, EventCreateResponse } from "../types/api";

export const createEvent = async (data: EventCreateRequest) => {
  const response = await requestJSON<EventCreateResponse, EventCreateRequest>({
    url: "api/v1/events",
    method: "POST",
    data,
  });

  return response.data;
};
