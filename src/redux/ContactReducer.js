import * as ActionTypes from './ActionTypes';

export const ContactReducer = (state = {
  contactMe: []
}, action) => {
switch (action.type) {
  case ActionTypes.ADD_CONTACT:
      return {...state, contactMe: action.payload.contactme};

  default:
    return state;
}
};