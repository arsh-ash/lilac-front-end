 export const url = 'http://localhost:8000';

 export const ApiCongig={

    auth:{
        login:`${url}/auth/login`,
        register:`${url}/auth/register`
    },
    product:{
        createProduct:`${url}/product/create`,
        editProduct:`${url}/product/edit`,
        getAllProducts:`${url}/product/getAllProducts`,
        addProductToCart:`${url}/product/addProductToCart`,
        getUserCart:`${url}/product/userCart`,
        removeProduct:`${url}/product/removeProductFromCart`
    }

}