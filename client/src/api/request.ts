import request from "./resp";
import { IUser } from "./type";

export const getAllUsers = async () => {
  let users = await request<IUser[]>({
    method: "GET",
    url: "/all",
  });
  return users;
};

export const addUser = (username: string, age: number) => {
  request<void>({
    method: "POST",
    url: "/add",
    data: {
      username,
      age,
    },
  });
};
