import { useState } from 'react';
import {
    Box,
    Grid,
    Button,
    Card,
    CardContent,
    TextField,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    Container,
    InputAdornment,
    IconButton,
    useTheme,
    Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Add } from '@mui/icons-material';
import { ApiCongig } from '../config/apiConfig';
// import { createCourse, uploadThumbnail } from '../../../API/Course';

const CreateProduct = (props) => {

    const{refresh,setRefresh}=props
    const[showForm,setShowForm]=useState(false);

    const [formData, setData] = useState({
        name: '',
        price: '',
        quantity: '',

    });


    const [thumbnail, setThumbnail] = useState();
    const navigate = useNavigate();

    const theme = useTheme();
    const handleSubmit = async () => {
        let token = await localStorage.getItem("token");

        if (
            formData.name === '' ||
            formData.price === '' ||
            formData.qunatity === ''
        ) {
            alert('Enter All values');
        } else {

            console.log("formdatakj", formData);
            console.log("api congig", ApiCongig.product.createProduct);


            const response = await axios.post(ApiCongig.product.createProduct, formData, {
                headers: {
                    Accept: '*',
                    Authorization: `Bearer ${token}`
                }

            })

            console.log("response", response);
            let productId = response.data.product._id
            console.log("productId", productId);

            const data = new FormData();
            data.append('thumbnail', thumbnail);
            console.log('new formdata', data);

            let res = await axios.put(`${ApiCongig.product.editProduct}/${productId}`,data,{
                    headers: {
                        Accept: '*',
                        Authorization: `Bearer ${token}`
                    }

                }
            )
            console.log("res", res);
             setRefresh(!refresh);



        }
    };

    const handleChange = (e) => {
        setData({ ...formData, [e.target.name]: e.target.value });
    };
    const uploadFile = (e) => {
        const img = e.target.files[0];
        console.log("img", img);
        setThumbnail(img);
    };
    const removeThumb = () => {
        setThumbnail('');
    };
    return (
        <>
        
        <Box sx={{
                display:"flex",
                justifyContent:"end"
             }}>
                <Button onClick={()=>setShowForm(true)}
                varient="contained">
                    Add new Product
                </Button>
            </Box>
        {
         showForm&&(
            <>  
          
        <Container maxWidth="md" sx={{
            marginTop:"50px"
        }}>
           
            <Card>
                <CardContent>
                    <Grid container flexDirection="column" spacing={2}>
                        <Grid item>
                            <TextField
                                label="Product name"
                                fullWidth
                                name="name"
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="price"
                                fullWidth
                                name="price"
                                onChange={(e) => { handleChange(e) }}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item>
                            {' '}
                            <TextField
                                label="quantity"
                                name="quantity"
                                variant="outlined"
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            {' '}
                            <TextField
                                label="thumbnail"
                                name="thumbnail"
                                type="file"
                                variant="outlined"
                                onChange={uploadFile}
                                fullWidth
                            />
                        </Grid>

                    </Grid >
                    <Box mt={2}
                    sx={{
                        display:"flex"
                    }}>
                        <Button sx={{
                            display:"inline"
                        }}
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    
                    
                        <Button
                            variant="contained"
                            
                            onClick={()=>{setShowForm(false)}}
                            sx={{
                                marginLeft:"10px"
                            }}
                        >
                            Cancel
                        </Button>
                        </Box>
                    
                </CardContent>
            </Card>
        </Container>
            </>
         )
        }

        </>
    );
};

export default CreateProduct;
