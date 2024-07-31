import { Button, FormLabel, TextField } from "@mui/material";
import Left from "./Left";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductUpdate() {

    const {id} = useParams()
    const [product,setProduct] = useState("")


    useEffect(()=>{
        fetch(`/api/adminupdatedata/${id}`).then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            setProduct(result.Data)
        })
    },[])
    

    return ( 
        <>
             <div className="w-4/5 h-screen flex justify-center mx-auto mt-4">
                <Left/>
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-5">Update Product</h1>
                    <form>  
                        <FormLabel>Product Title</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}}
                        value={product.productTitle}
                         />   
                         <FormLabel>Product Description</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                       value={product.productDesc}
                         />
                         <FormLabel>Product Price</FormLabel>
                        <TextField id="outlined-basic"  variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                        value={product.productPrice}
                         />
                        <Button className="w-full" sx={{marginBottom:"20px"}} variant="contained" color="primary" type="submit">Update Product</Button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default ProductUpdate;