import { LOADING_FINISHED, LOADING_STARTED } from '../actions/actionTypes';

const initialState = {
  count: 0,
  status: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_FINISHED:
      return {
        count: state.count - 1,
        status: state.count - 1 ? true : false,
      };
    case LOADING_STARTED:
      return {
        count: state.count + 1,
        status: true,
      };
    default:
      return state;
  }
};

export default reducer;
