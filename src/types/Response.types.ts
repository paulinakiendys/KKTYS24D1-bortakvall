type SuccessResponse<T> = {
  status: "success";
  data: T;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type FailResponse = {
  status: "fail";
  message: string;
  data: { [key: string]: string[] };
};

export type ResponseData<T> = SuccessResponse<T> | ErrorResponse | FailResponse;
