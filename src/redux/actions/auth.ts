import { AxiosError, AxiosResponse } from 'axios';
import {
  AUTH_FAILED,
  AUTH_LOGOUT,
  AUTH_STARTED,
  AUTH_SUCCESS,
  CLEAR_USER,
} from './actionTypes';

export interface IData {
  email: string;
  password: string;
}

export interface IResponse extends AxiosResponse {
  token: string;
}

export interface IError {
  error: string;
}

export const authStarted = (data: IData) => ({
  data,
  type: AUTH_STARTED,
});

export const authSuccess = (data: IData) => ({
  payload: data,
  type: AUTH_SUCCESS,
});

export const authFailed = (error: AxiosError) => ({
  payload: error,
  type: AUTH_FAILED,
});

export const authenticate = (dispatch: any) => (data: IData) => {
  dispatch(authStarted(data));
};

export const logout = (dispatch: any) => () => {
  dispatch({
    type: AUTH_LOGOUT,
  });

  dispatch({
    type: CLEAR_USER,
  });
};
