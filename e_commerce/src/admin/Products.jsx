import { Button } from "@mui/material";
import Left from "./Left";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Products() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate()

  

    useEffect(()=>{
        fetch("/api/alladminproduct")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
        console.log(result)
      setProductData(result.Data);
    });
    },[])



    function handledelete(id){
        console.log(id)
        fetch(`/api/adminproductdelete/${id}`,{
            method:"DELETE"
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            if(result.Message){
                navigate("/products")
                toast.success(result.Message)
            }
        })
        
    }

    


  return (
    <>
      <div className="w-4/5 h-screen flex justify-center mx-auto mt-4">
        <Left />
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-5">Product Management</h1>
          <Link to={"/productadd"}>
            <Button variant="outlined" color="secondary" className="w-full">
              Add Product Here
            </Button>
          </Link>

          <div class="relative overflow-x-auto shadow-md  mt-10">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-800">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Update
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                    productData.map((value,index)=>(
                        <tr class="bg-white border-b dark:bg-gray-400 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.productTitle}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.productDesc
                    }
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.productPrice}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                   <Link to={`/updateproduct/${value._id}`}><Button variant="text" color="success" endIcon={<ArrowCircleUpIcon/>}>Update</Button></Link> 
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                   <Button variant="text" color="error" onClick={()=>{handledelete(value._id)}} endIcon={<DeleteForeverIcon/>}>Delete</Button>
                  </th>
                </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
