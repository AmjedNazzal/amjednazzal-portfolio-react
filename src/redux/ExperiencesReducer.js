import * as ActionTypes from './ActionTypes';

export const ExperiencesReducer = (state = {
  experiences: []
}, action) => {
switch (action.type) {
  case ActionTypes.ADD_EXPERIENCES:
      return {...state, experiences: action.payload.experiencesAndSkills};

  default:
    return state;
}
};