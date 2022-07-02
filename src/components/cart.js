import react, { useEffect, useState } from "react"
import { Grid, Box, Container, Button } from "@mui/material"
import axios from "axios";
import { ApiCongig, url } from "../config/apiConfig"
import DeleteIcon from '@mui/icons-material/Delete';





const Cart = () => {
    const [cartItems, setCartItems] = useState();
    const[refresh,setRefresh]=useState(false)
    const[price,setPrice]=useState(0)

    useEffect(() => {
        getCartItems();


    }, [refresh])

    const getCartItems = async () => {
        const token = localStorage.getItem("token");

        let response = await axios.get(ApiCongig.product.getUserCart, {

            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }


        })
        console.log("response of cart items", response.data.data)
        setCartItems(response.data.data.cart)
        setPrice(response.data.count);
       

    }
    
    const removeProduct= async (itemId)=>{
        const token = localStorage.getItem("token");

        let response= await axios.delete(`${ApiCongig.product.removeProduct}/${itemId}`,{
            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }
        }

        )

        setRefresh(!refresh);

        

    }
    
        
    
    return (
        <Container sx={{
            paddingTop:"10px"

        }}>
            {
                cartItems?.map(item => {
                    return (

                        <Box style={{
                            display: "flex",
                        
                            borderRadius:"10px",
                            marginBottom:"10px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }}>
                            <Box sx={{
                                height: "300px",
                                width: "400px"
                            }}>
                                <img style={{
                                    height:"100%",
                                    width:"100%",
                                    borderRadius:"10px"
                                  }}
                                  src={`${url}${item.thumbnail}`} >
                                  </img>

                            </Box>
                            
                            
                             <Box>
                                <h3 style={{
                                    marginLeft:"10px"
                                }}>{`Name: ${item.name}`}</h3>
                                <h3 style={{
                                    marginLeft:"10px"
                                }}> {`Price: Rs ${item.price}/-`}</h3>
                                <Button variant="contained"
                             
                                onClick={()=>{removeProduct(item._id)}}
                                >
                                Remome Item <DeleteIcon></DeleteIcon>
                                </Button>


                            </Box>

                        </Box>



                    )

                })


            }
            <Box>
                <h2>
                {`Total Amount Rs :${price}/-`}
                </h2>
              
            </Box>

        </Container>

    )
}

export default Cart