import  Navbar  from "./navbar"
import AddProduct from "./addproduct"
import AllProducts from "./Allproduct"
import { useEffect,useState } from "react"
import { ApiCongig } from "../config/apiConfig"
import axios from "axios"


function Home(){

    const[cartItems,setCartItems]=useState();
    const [allProducts, setAllProducts] = useState()

    const[refresh,setRefresh]=useState(false)

    useEffect( ()=>{
         getCartItems();
          getAllProducts();


    },[refresh])
   
    const getCartItems= async ()=>{
        let token=localStorage.getItem("token");

        let response=  await axios.get(ApiCongig.product.getUserCart,{
            
            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }
        

    })
    console.log("response of cart items on top",response)
    setCartItems(response.data.data.cart)
    

    }
    const getAllProducts = async () => {
        let token=localStorage.getItem("token");

        let response = await axios.get(ApiCongig.product.getAllProducts,{
            headers: {
                Accept: '*',
                Authorization: `Bearer ${token}`
            }

        });

        console.log("Booom home all",response);

        
        setAllProducts(response.data.data)

       
        
    }
    return(
        <>
        <Navbar 
         data={cartItems}
        />
        <AddProduct 
          refresh={refresh}
          setRefresh={setRefresh}
        />
        <AllProducts 
        refresh={refresh}
        setRefresh={setRefresh}
        allProducts={allProducts}
        />

        
        </>
    )

}
export default Home