import react from "react"
import  Router  from './routes';
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { connect } from "react-redux";
import {authenticateUser} from "./actions/auth"
import axios from "axios";


function App(props) {
  useEffect(()=>{
    const token=localStorage.getItem("token");
    console.log("TOKEN",token);
    if(token){

      const user = jwtDecode(token);

      props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          firstName: user.firstName,
          lastName:user.lastName,
          role:user.role
        })
      );

    }

  },[])
  
  console.log("hiiii in app component ")

  return (
    <>
     <Router/>
    </>
   
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);