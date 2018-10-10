import axios from 'axios';
// tslint:disable-next-line:no-submodule-imports
import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTH_STARTED } from '../actions/actionTypes';
import { authFailed, authSuccess } from '../actions/auth';
import { loadingFinished, loadingStarted } from '../actions/loading';
import { setUser } from '../actions/storage';

export interface IData {
  email: string;
  password: string;
}

export interface IAction {
  type: string;
  data: object;
}

export const authSagas = [takeEvery(AUTH_STARTED, handleAuthenticate)];

function* handleAuthenticate(action: IAction) {
  yield put(loadingStarted());

  try {
    const response = yield call(() =>
      axios.post('https://reqres.in/api/login', action.data)
    );
    const data = { ...action.data, token: response.token };

    yield put(authSuccess(response));
    yield put(setUser(data));
  } catch (error) {
    yield put(authFailed(error));
  }

  yield put(loadingFinished());
}
