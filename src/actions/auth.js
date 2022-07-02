import {
    NAME,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_START,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    LOGOUT,
    AUTHENTICATE_USER,
} from "./actionTypes"
import { toast } from 'react-toastify';

import { ApiCongig } from "../config/apiConfig";

import axios from "axios";




export function startLogin() {
    console.log("caling startlogin action");
    return {
        type: LOGIN_START,
    }

}
export function startSignUp() {
    return {
        type: SIGNUP_START,
    }

}
export function loginFailed(errorMessage) {
    return {
        type: LOGIN_FAILED,
        error: errorMessage
    }

}
export function signUpFailed(errorMessage) {
    console.log("errorBooom",errorMessage);
      return {
        type: SIGNUP_FAILED,
        error: errorMessage
    }

}
export function loginSuccess(user) {
    console.log("userrrrr", user);
    return {
        type: LOGIN_SUCCESS,
        user: user
    }

}
export function signUpSuccess(user) {
    console.log("userrrrr", user);
    return {
        type: SIGNUP_SUCCESS,
        user: user
    }

}
export function login(values) {
    console.log("calling api");
    console.log("values", values)
    return async (dispatch) => {
        const response = await axios.post(ApiCongig.auth.login, values);
        console.log("api res", response);
        if (response.data.success == true) {
            console.log("user", response.data.data.user);
            console.log("token", response.data.data.token);

            localStorage.setItem("token", response.data.data.token);
            console.log("login success");
            dispatch(loginSuccess(response.data.data.user));
              


        } else {
            console.log("err",response.data.message)
            toast.error(response.data.message)

            dispatch(loginFailed(response.data.message));
        }

    }

}

export function signUp(values) {
    console.log("calling api");
    console.log("values", values)
    return async (dispatch) => {
        const response = await axios.post(ApiCongig.auth.register, values);
        console.log("api again", response);
        if (response.data.success == true) {
            console.log("token", response.data.message);
            console.log("user", response.data.data.user);

            localStorage.setItem("token", response.data.data.token);
            dispatch(signUpSuccess(response.data.data.user));




        } else {
            toast.error(response.data.message);
            dispatch(signUpFailed(response.data.message));
        }

    }

}

export function authenticateUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user: user
    }

}

export function logout(){ 
    return{
        type:LOGOUT,
    
    }

}