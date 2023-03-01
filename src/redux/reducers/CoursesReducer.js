import {
    COURSES_REQUEST,
    COURSES_SUCCESS,
    COURSES_FAIL 
} from "../actions/types"



export const GetCoursesReducer = (state = {}, action) => {
    switch (action.type) {
      case COURSES_REQUEST:
        return { loading: true };
      case COURSES_SUCCESS:
        return { loading: false, user: action.payload };
      case COURSES_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };