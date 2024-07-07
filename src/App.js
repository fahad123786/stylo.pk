import "./style.css"
import Prenav from "./components/Prenav";
import Prenav2 from "./components/Prenav2";
import Navbar from "./components/Navbar";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainNavbar from "./components/MainNavbar";


function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eid-collection" element={<EidCollection />} />
        <Route path="/summer-24" element={<Summer24 />} />
        <Route path="/women-shoes" element={<Womenshoes/>} />
        <Route path="/women-apperals" element={<WomenApperals />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/fragments" element={<Fragmenent />} />
        
    

        <Carousel />
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

    </>
  );
}

export default App;
