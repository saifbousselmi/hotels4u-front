import { CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_USER, LOGIN_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAIL, REGISTER_USER_LOAD, REGISTER_USER_SUCCESS } from "../ActionsTypes/AuthActionTypes"
import axios from "axios"
export const register = (userData, navigate, setError, setLoading) => async dispatch => {
  dispatch({ type: "REGISTER_USER_LOAD" });
  try {
    const response = await axios.post("http://localhost:5000/api/auth/register", userData);
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: response.data });
    navigate("/hotels");
  } catch (error) {
    setError(error.response.data.msg || "Something went wrong");
    setLoading(false);
  }
};



// Login
export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_LOAD });
  try {
    let result = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data });
    navigate("/");
  } catch (error) {
    const errorMessage = error.response ? error.response.data : "Network error";
    dispatch({ type: LOGIN_USER_FAIL, payload: errorMessage });
  }
};

  //logout
  export const logout = (navigate) => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    navigate('/login')
  }


  export const current = () => async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOAD });
    try {
          const config = {
            headers: { Authorization: localStorage.getItem("token") },
          };
          console.log(config)
      let result = await axios.get("http://localhost:5000/api/auth/current", config);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      console.log(error)
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.errors });
    }
  };



export const clearErrorsAuth = () => {
  return {
    type: CLEAR_ERRORS_AUTH,
  };
};

export const clearSuccessAuth = () => {
  return {
    type: CLEAR_SUCCESS_AUTH,
  };
};