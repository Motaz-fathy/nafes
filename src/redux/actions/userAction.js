import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS 
} from "./types.js"


// login
const url = "https://nafes.app/cv_task/api/login.php";
export const LoginAction = (email, pass) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    };
    const  {data}  = await axios.post(
      `${url}`,
      { email, pass},
      config
    );
    console.log(data)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};