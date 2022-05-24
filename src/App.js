import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-count-animation/dist/count.min.css';
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import SingUp from "./pages/Login/SingUp";
import RequireAuth from './pages/Login/RequireAuth'

function App() {
  return <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/purchase" element={
      <RequireAuth>
        <Products/>
      </RequireAuth>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/singUp" element={<SingUp/>} />
    </Routes>
    <Footer/>

    <ToastContainer />
  </>;
}

export default App;
