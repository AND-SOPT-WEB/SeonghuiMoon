import { instance, authInstance } from "./instance";

import { isAxiosError } from "axios";

const AUTH_URL = {
  USER_URL: "/user",
  USER_LOGIN_URL: "/login",
  MY_HOBBY_URL: "/user/my-hobby",
  USER_HOBBY_URL: (userNo: string) => `/user/${userNo}/hobby`,
};

interface UserData {
  username: string;
  password: string;
  hobby: string;
}

export const addUser = async (userData: UserData) => {
  try {
    const response = await instance.post(AUTH_URL.USER_URL, userData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
  }
};

interface LoginData {
  username: string;
  password: string;
}

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await instance.post(AUTH_URL.USER_LOGIN_URL, loginData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
  }
};

export const myHobby = async () => {
  try {
    const response = await instance.get(AUTH_URL.MY_HOBBY_URL);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
  }
};

export const UserHobby = async (userNo: string) => {
  try {
    const response = await authInstance.get(AUTH_URL.USER_HOBBY_URL(userNo));
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
  }
};

interface FixMyData {
  hobby: string;
  password: string;
}

export const fixUserInfo = async (fixMyData: FixMyData) => {
  try {
    const response = await authInstance.put(AUTH_URL.USER_URL, fixMyData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
  }
};
