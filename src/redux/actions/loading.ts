import { LOADING_FINISHED, LOADING_STARTED } from './actionTypes';

export const loadingStarted = () => ({
  type: LOADING_STARTED,
});

export const loadingFinished = () => ({
  type: LOADING_FINISHED,
});
