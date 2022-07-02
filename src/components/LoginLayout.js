import react from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "./LoginLayout.css"
import { Outlet } from "react-router-dom";



export const LoginLayout=()=>{
    return(<Grid container>
        <Grid item md={7} 
        className="main">
            <img 
            alt="trolley image not available"
            src="https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            className="login_img"/>
            </Grid>
        <Grid item md={5}>
            <Outlet/>
            
            </Grid>
    
    
    
    </Grid>

    )
}