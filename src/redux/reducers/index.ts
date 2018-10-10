import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import loadingReducer from './loading';
import storageReducer from './storage';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  loading: loadingReducer,
  storage: storageReducer,
});

export default rootReducer;
