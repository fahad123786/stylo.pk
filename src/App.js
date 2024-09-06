import "./style.css"

import 'swiper/css';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import EidCollection from "./pages/EidCollection";
import Summer24 from "./pages/Summer24";
import Womenshoes from "./pages/Womenshoes";
import WomenApparels from "./pages/WomenApparels";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Fragnances from "./pages/Fragnances";
import 'bootstrap/dist/css/bootstrap.css';
import ProductDescription from "./pages/ProductDescription";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eid-collection" element={<EidCollection />} />
        <Route path="/summer-24" element={<Summer24 />} />
        <Route path="/women-shoes" element={<Womenshoes />} />
        <Route path="/women-apparels" element={<WomenApparels />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accesories" element={<Accessories />} />
        <Route path="/fragnances" element={<Fragnances />} />
        <Route path= "/product/:id" element={<ProductDescription/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/login" element={<Login/>}/>

       
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />

    <Footer/>

    </>
  );
}

export default App;
