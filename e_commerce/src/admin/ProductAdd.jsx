import { Button, TextField } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProductAdd() {

    const [Ptitle,setPtitle] = useState("")
    const [PDesc,setPdesc] = useState("")
    const [Pprice,setPprice] = useState("")

    const navigate = useNavigate()

    function handleForm(e){
        e.preventDefault()
        const formData = {Ptitle,PDesc,Pprice}

        fetch("/api/adminproductsadd",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            if(result){
                navigate("/products")
                toast.success(result.Message)
            }
        })

    }

    return ( 
        <>
             <div className="w-4/5 h-screen flex justify-center mx-auto mt-4">
                <Left/>
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-5">Product Add Here</h1>
                    <form onSubmit={handleForm}>  
                        <TextField id="outlined-basic" label="Product Title" variant="outlined" className="w-full" sx={{marginBottom:"20px"}}
                        value={Ptitle}
                        onChange={(e)=>{setPtitle(e.target.value)}}
                         />   
                        <TextField id="outlined-basic" label="Product Description" variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                        value={PDesc}
                        onChange={(e)=>{setPdesc(e.target.value)}}
                         />
                        <TextField id="outlined-basic" label="Product Price" variant="outlined" className="w-full" sx={{marginBottom:"20px"}} 
                        value={Pprice}
                        onChange={(e)=>{setPprice(e.target.value)}}
                         />
                        <Button className="w-full" sx={{marginBottom:"20px"}} variant="contained" color="primary" type="submit">Add Product</Button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default ProductAdd;