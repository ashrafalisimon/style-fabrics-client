import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-count-animation/dist/count.min.css';
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
    <Footer/>
  </>;
}

export default App;
