import axios from "axios";
import {
    COURSES_REQUEST,
    COURSES_SUCCESS,
    COURSES_FAIL 
} from "./types.js"

// get courses list 

const url = "https://nafes.app/cv_task/api/course_list.php?userId=2211";
export const CoursesList = () => async dispatch => {
    try {
      dispatch({ type: COURSES_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      };
      const  {data}  = await axios.get(
        `${url}`,
        config
      );
      dispatch({ type: COURSES_SUCCESS, payload: data });
      localStorage.setItem("courses", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: COURSES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };



