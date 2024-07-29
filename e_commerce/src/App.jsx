import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./common/Login";
import Navbar from "./common/Navbar";
import Registration from "./common/Registration";
import Product from "./frontend/Product";
import Admin from "./admin/Admin";


function App() {
  return ( 
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/reg" element={<Registration/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;