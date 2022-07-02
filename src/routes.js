import react from "react"
import { Navigate, useRoutes } from "react-router-dom";
import { connect } from "react-redux";

import { LoginLayout } from "./components/LoginLayout";
import Signup from "./components/signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/cart";



const Router = (props) => {
    const { isLoggedin,user } = props.auth
    console.log("isloggedin", isLoggedin);

    return useRoutes([
        {
        path: "/",
        element: isLoggedin ? <Navigate to="/home" /> : <LoginLayout />,

        children: [
            {
                path: "",
                element: <Login />,
            }, {
                path: "/signup",
                element: <Signup />
            }
        ]
        
        
      

    },{
        path:"/home",
        element:isLoggedin?<Home/>: <Navigate to="/" />
        
    },{
        path:"/cart",
        element:isLoggedin?<Cart/>: <Navigate to="/" />

    }
])

}
function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps)(Router);


