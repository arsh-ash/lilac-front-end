import "./signup.css"
import react from "react"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import { signUp, startSignUp } from "../actions/auth";
import { connect } from "react-redux";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    console.log("props",props)
    const {  inProgress, isLoggedin } =props.auth;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async () => {


        let data = {
            firstName: formData.firstName,
            lastName:formData.lastName,
            email: formData.email,
            password: formData.password,
        }
        console.log(data);
        props.dispatch(startSignUp())
        props.dispatch(signUp(data));



    }
    return (
        <>
            <Box className="signup_main">
                <Box sx={{
                    marginTop:"10%",
                    marginLeft:"8%"

                }}>
                    <h2 style={{
                        fontWeight: "400",
                        textAlign: "justify"
                    }}>SIGN UP</h2>
                    <TextField className="email_field" id="outlined-basic" label="firstname" variant="outlined"
                        sx={{ width: "80%", marginBottom: "5%" }}
                        name="firstName"
                        onChange={(e) => { handleChange(e) }}

                    />
                     <TextField className="email_field" id="outlined-basic" label="lastname" variant="outlined"
                        sx={{ width: "80%", marginBottom: "5%" }}
                        name="lastName"
                        onChange={(e) => { handleChange(e) }}

                    />
                    <TextField className="email_field" id="outlined-basic" label="email" variant="outlined"
                        sx={{ width: "80%", marginBottom: "5%" }}
                        name="email"
                        onChange={(e) => { handleChange(e) }}

                    />
                    <TextField className="email_field" id="outlined-basic" label="password" variant="outlined"
                        sx={{ width: "80%", marginBottom: "5%" }}
                        name="password"
                        onChange={(e) => { handleChange(e) }}

                    />


                   

                </Box>


                <Button variant="contained"
                    className="signup-button"
                    sx={{ 
                        marginLeft:"8%"
                     }}
                    onClick={handleSubmit}
                >Signup</Button>
                 <Link to="/" style={{
                        textDecoration: "none"
                    }}>
                        <p style={{
                            color: "gray",
                            marginLeft:"8%"
                        }}>Already have an account have an account? click here to Login!</p>
                    </Link>


            </Box>
            <ToastContainer/>


        </>
    )
}
function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }
  export default connect(mapStateToProps)(Signup);