
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import { useNavigate } from 'react-router-dom';
import { borderRadius } from '@mui/system';



const Navbar = (props) => {
    
    const { isLoggedin, user } = props.auth
    console.log("Navbar user", user)
    const navigate = useNavigate();
    console.log("CART", props?.data?.length);

    const handleLogout = () => {

        localStorage.removeItem('token');
        navigate('/');



        props.dispatch(logout());

    }

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ShoppingBagIcon size="large"

                        />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Arsh-cart
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {`${user.firstName} ${user.lastName}`}
                    </Typography>
                    <Button color="inherit"
                        onClick={() => handleLogout()}
                    >Signout
                    </Button>
                    <Box
                       sx={{
                            position: "relative",
                            display: "flex"
                        }}
                        onClick={ ()=>navigate("/cart")}

                    >
                        <Box sx={{
                            height: "30px",
                            width: "30px",
                        }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}>
                            </img>

                        </Box>
                        <div style={{
                            background: "yellow",
                            height: "23px",
                            width: "23px",
                            color: "black",
                            position: "absolute",
                            bottom: "19px",
                            left: "20px",
                            borderRadius: "50%"

                        }}>
                            <span style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "3px"
                            }}>
                                {props?.data?.length}
                            </span>


                        </div>



                    </Box>
                </Toolbar>
            </AppBar>

        </Box>





    )
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(Navbar);