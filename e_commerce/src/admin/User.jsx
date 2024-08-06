import { useEffect, useState } from "react";
import Left from "./Left";
import { Button } from "@mui/material";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function User() {

    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("/api/userdata").then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            setUser(result.Data)
        })
    },[])

    return ( 
        <>
             <div className="w-11/12  flex-col justify-center mx-auto mt-4">
                <Left/>
                <div className="w-full mt-4" >
                <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center">User Management..🙋‍♂️</h1>

                <div className="relative overflow-x-auto shadow-md  mt-10 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#eafc3a4a] dark:text-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>

                  <th scope="col" className="px-6 py-3">
                    UserEmail
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Create Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Status
                  </th>
                </tr>
              </thead>
              <tbody>
             
                {
                    user.map((value,index)=>(
                        <>
                        <tr key={index} className="bg-white border-b dark:bg-[#e3e7ee5c] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {index+1}
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.useremail
                    }
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {value.createDate}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    <Button color="success" endIcon={<ToggleOnIcon/>}>{value.status}</Button>
                  </th>
                  
                </tr>
                        </>
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

export default User;