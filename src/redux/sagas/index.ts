// tslint:disable-next-line:no-submodule-imports
import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { storageSagas } from './storage';

export default function* rootSaga() {
  yield all([...authSagas, ...storageSagas]);
}
