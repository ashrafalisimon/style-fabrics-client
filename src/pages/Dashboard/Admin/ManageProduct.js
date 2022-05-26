import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["products"], () =>
    fetch("http://localhost:5000/available").then((res) => res.json())
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
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
                {
                    products.map((product,index) => 
                        <tr key={product._id}>
                        <th>{index+1}</th>
                        <td>{product.productName}</td>
                        <td>${product.price}</td>
                        <td>{product.availableQuantity} pics</td>
                        <td><button className="btn btn-xs btn-error">Delete</button></td>
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

export default ManageProduct;
