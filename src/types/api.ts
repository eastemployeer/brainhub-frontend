
export interface EventCreateResponse {
  status: string;
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    date: string;
  };
}

export interface EventCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}

export interface ErrorResponse {
  status: string;
  message: string;
}
