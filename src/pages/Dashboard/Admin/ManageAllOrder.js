import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const ManageAllOrder = () => {

    const {
        data: orders,
        isLoading,
        refetch,
      } = useQuery(["products"], () =>
        fetch("http://localhost:5000/allOrder").then((res) => res.json())
      );
    
      if (isLoading) {
        return <Loading />;
      }

    return (
        <div className="w-full px-8 space-y-3">
      <h1 className="text-center">Manage Product</h1>

      <div className="w-full">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Processing/Shapied</th>
              </tr>
            </thead>
            <tbody>
                {
                    orders.map((order,index) => 
                        <tr key={order._id}>
                        <th>{index+1}</th>
                        <td>{order.productName}</td>
                        <td>{order.quantity} pics</td>
                        <td>${order.price} </td>
                        <td><button className="btn btn-xs btn-primary">Processing</button></td>
                      </tr>
                        )
                }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageAllOrder;