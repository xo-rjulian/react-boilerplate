import { IAction } from '../sagas/storage';
import { CLEAR_USER, SET_USER } from './actionTypes';

export const setUser = (data: IAction) => ({
  payload: data,
  type: SET_USER,
});

export const clearUser = () => ({
  payload: undefined,
  type: CLEAR_USER,
});
