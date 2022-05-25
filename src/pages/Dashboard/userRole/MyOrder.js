import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?user=${user.email}`,{
        method: "GET",
        headers:{
          'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then((res) => {
          console.log('res',res);
            if(res.status === 403 || res.status === 401){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/home')
              }
              return res.json()
        })
        .then((data) => {setOrders(data)});
    }
  },[]);

  return (
    <div className="w-full">
      <h4 className="text-center py-4">My All Order {orders.length}</h4>

      <div className="overflow-x-auto px-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Paid</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map((order,index) =>
                    <tr key={index}>
                    <th>{index+1}</th>
                    <th>{order.productName}</th>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td><span className="btn btn-xs">Paid</span></td>
                    <td><span className="btn btn-xs btn-error">Cancel</span></td>
                  </tr>
                    )
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
