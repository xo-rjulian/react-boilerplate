import { Base64 } from 'js-base64';
import { Action } from 'redux';
// tslint:disable-next-line:no-submodule-imports
import { takeEvery } from 'redux-saga/effects';
import { CLEAR_USER, SET_USER } from '../actions/actionTypes';

export interface IAction extends Action {
  payload: object;
}

export const storageSagas = [
  takeEvery(SET_USER, handleSetUser),
  takeEvery(CLEAR_USER, handleClearUser),
];

function* handleSetUser(action: IAction) {
  yield window.localStorage.setItem(
    'user',
    Base64.encode(JSON.stringify(action.payload))
  );
}

function* handleClearUser() {
  yield window.localStorage.removeItem('user');
}
