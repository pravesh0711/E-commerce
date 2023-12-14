import { publicRequest } from "../requestMethod";
import { registerFailiure, registerStart, registerSuccess } from "./registerRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, register) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", register);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailiure());
  }
};
