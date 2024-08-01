import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';


function Left() {
    return ( 
        <>
            <div className="w-1/4 flex flex-col gap-4">
                <Link to={"/products"}><Button variant="contained" color="success" startIcon={<CategoryIcon/>}>Products</Button></Link>
                <Link to={"/userquery"}><Button variant="contained" color="success" startIcon={<CategoryIcon/>}>Query</Button></Link>
            </div>
        </>
     );
}

export default Left;