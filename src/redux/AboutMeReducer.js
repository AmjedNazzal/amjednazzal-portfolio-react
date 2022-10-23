import * as ActionTypes from './ActionTypes';

export const AboutReducer = (state = {
  isLoading: true,
  errMess: null,
  aboutMe: []
}, action) => {
switch (action.type) {
  case ActionTypes.ADD_ABOUTME:
    return {...state, isLoading: false, errMess: null, aboutMe: action.payload};
  case ActionTypes.PAGE_LOADING:
    return {...state, isLoading: true, errMess: null, aboutMe: []};
  case ActionTypes.LOADING_FAILED:
      return {...state, isLoading: false, errMess: action.payload, aboutMe: []};

  default:
    return state;
}
};