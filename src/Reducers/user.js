import {NAME,
    LOGIN_START,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SIGNUP_START,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    LOGOUT,
    AUTHENTICATE_USER
} from "../actions/actionTypes"

const initialAuthState={
    cartItems:[]
    
}

export default function auth(state=initialAuthState,action){
    console.log("cart reducer called")


    return  state;

}