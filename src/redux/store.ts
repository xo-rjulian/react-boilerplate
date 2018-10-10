import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const ehancer = compose(
  composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

const store = createStore(rootReducer, ehancer);

sagaMiddleware.run(rootSagas);

export default store;
