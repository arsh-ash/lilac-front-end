import react, { useEffect, useState } from "react"
import { Grid, Box, Typography, Button } from "@mui/material"
import axios from "axios"
import { ApiCongig,url } from "../config/apiConfig"
import "./allProducts.css"
import { borderRadius } from "@mui/system"
import { Refresh } from "@mui/icons-material"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';





const AllProducts = (props) => {
    let token=localStorage.getItem("token");

    const{refresh,setRefresh,allProducts}=props



    // useEffect(() => {

    //     getAllProducts()

    // }, [])
    // const getAllProducts = async () => {
    //     let response = await axios.get(ApiCongig.product.getAllProducts,{
    //         headers: {
    //             Accept: '*',
    //             Authorization: `Bearer ${token}`
    //         }

    //     });
    //     setAllProducts(response.data.data)
    //     setRefresh(!refresh);

       
        
    // }
    const handleCart= async (itemId)=>{
        console.log("item ki id",itemId);
        let response= await axios.post(`${ApiCongig.product.addProductToCart}/${itemId}`,{

        },{
            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }
        }

        )

        console.log("response of add to cart",response);
        
            setRefresh(!refresh);

        


    }
    const removeProduct= async (itemId)=>{
        console.log("item ki id",itemId);
        let response= await axios.delete(`${ApiCongig.product.removeProduct}/${itemId}`,{
            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }
        }

        )

        console.log("response of remove from cart",response);
        
            setRefresh(!refresh);

    }



    console.log("alll products", allProducts,url);

    return (

        <Grid container  sx={{
            // border: "2px solid black"
            marginTop:"20px",
            justifyContent:"start",
            padding:"10px",
        }}>
            {
                allProducts?.map(item => {
                    return (
                        <Grid item md={5} sx={{
                            
                            borderRadius:"5px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
                            marginTop:"10px",
                            marginLeft:"25px"
                        }}>

                            <Box sx={{
                                // border: "2px solid red",
                                display: "flex"
                            }}>
                                <Box sx={{
                                    height:"250px",
                                    width:"250px",
                                    // border:"2px solid blue"

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
                                    <p className="item_detail">{`Name: ${item.name}`}</p>
                                    <p className="item_detail">{`Price: Rs ${item.price}/-`}</p>
                                    <p className="item_detail">{` Quantity: ${item.quantity}`}</p>
                                    <Button sx={{
                                        marginLeft:"10px"
                                    }}
                                    variant="contained"
                                    onClick={()=>{handleCart(item._id)}}
                                    
                                       
                                     >Add to cart <AddIcon/></Button>
                                      <Button 
                                      sx={{
                                        marginLeft:"10px",
                                        
                                      }}
                                    variant="contained"
                                    onClick={()=>{removeProduct(item._id)}}
                                    
                                       
                                     >remove item <DeleteIcon/></Button>

                                   

                                </Box>


                            </Box>

                        </Grid>
                    )
                })


            }


        </Grid>

    )
}
export default AllProducts