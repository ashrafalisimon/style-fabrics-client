import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://young-plains-86754.herokuapp.com/order?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 403 || res.status === 401) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, []);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `https://young-plains-86754.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = orders.filter(service => service._id !== id);
            setOrders(remaining);
        })
    }
}

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
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{order.productName}</th>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-primary">pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{order.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>

                <td>
                  {
                    order.paid ? '' : <span onClick={() => handleDelete(order._id)} className="btn btn-xs btn-error">Cancel</span>
                  }
                </td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
