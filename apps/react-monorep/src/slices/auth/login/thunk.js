// Import the necessary helper files and methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
} from "../../../helpers/fakebackend_helper";
import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';

export const loginUser = (user, history) => async (dispatch) => {

  try {
    let response;

    // Check if the user credentials match the hardcoded ones
    if (user.email === "admin@themesbrand.com" && user.password === "123456") {
      const adminUserData = {
        email: "admin@themesbrand.com",
        name: "Admin",
        role: "admin",
      };
      sessionStorage.setItem("authUser", JSON.stringify(adminUserData));
      dispatch(loginSuccess(adminUserData));
      history('/dashboard');
      return;
    }

    // If not the admin user, proceed with the regular authentication process
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.loginUser(user.email, user.password);
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = postJwtLogin({ email: user.email, password: user.password });
    } else if (process.env.REACT_APP_DEFAULTAUTH) {
      response = postFakeLogin({ email: user.email, password: user.password });
    }

    const data = await response;
    console.log(data, 'response');

    if (data) {
      sessionStorage.setItem("authUser", JSON.stringify(data));
      dispatch(loginSuccess(data));
      history('/dashboard');
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

// Logout user function
export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    const fireBaseBackend = getFirebaseBackend();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

// Social login function
export const socialLogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
    }
      
    const socialdata = await response;
    if (socialdata) {
      sessionStorage.setItem("authUser", JSON.stringify(socialdata));
      dispatch(loginSuccess(socialdata));
      history('/dashboard');
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

// Reset login flag function
export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};
