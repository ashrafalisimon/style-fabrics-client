import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import ProductDetials from "./ProductDetials";
import PoductBanner from "../../img/slider-mainbg-001.jpg";
import ProductModal from "./ProductModal";

const AllProduct = () => {
    const [items, setItems] = useState(null);
    
  const { data: products, isLoading, refetch } = useQuery(["products"], () =>
    fetch("https://young-plains-86754.herokuapp.com/available").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div
        className=" min-h-min"
        style={{ backgroundImage: `url(${PoductBanner})` }}
      >
        <div className="text-center space-y-6 py-4 md:py-32">
          <h2 className="text-primary text-4xl ">Our Products</h2>
          <p className="text-white">We care about the quality, not the quantity.</p>
        </div>
      </div>

      <div className="px-4 py-4 md:px-28 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
          {products.map((product) => (
            <ProductDetials
              key={product._id}
              product={product}
              setItems={setItems}
            ></ProductDetials>
          ))}
        </div>
      </div>
      {
          items && <ProductModal 
          items={items}
          setItems={setItems}
          refetch={refetch}
          ></ProductModal>
      }
    </div>
  );
};

export default AllProduct;
