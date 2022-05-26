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
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/userRole/AddReview";
import MyOrder from "./pages/Dashboard/userRole/MyOrder";
import Users from "./pages/Dashboard/Admin/Users";
import RequireAdmin from "./pages/Login/RequireAdmin";
import NotFound from "./pages/Shared/NotFound";
import ManageAllOrder from "./pages/Dashboard/Admin/ManageAllOrder";
import AddProduct from "./pages/Dashboard/Admin/AddProduct";
import ManageProduct from "./pages/Dashboard/Admin/ManageProduct";

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

      <Route path="/dashboard" element={
        <RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyProfile/>}/>
          <Route path="myOrder" element={<MyOrder/>}/>
          <Route path="addReview" element={<AddReview/>}/>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}/>
          <Route path="manageAllOrder" element={<RequireAdmin><ManageAllOrder/></RequireAdmin>}/>
          <Route path="addProduct" element={<RequireAdmin><AddProduct/></RequireAdmin>}/>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct/></RequireAdmin>}/>
  
        </Route>

      <Route path="/login" element={<Login/>} />
      <Route path="/singUp" element={<SingUp/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>

    <ToastContainer />
  </>;
}

export default App;
