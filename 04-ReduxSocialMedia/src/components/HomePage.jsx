import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function HomePage() {
  const productData = useSelector((state) => state.cartStoreReducer.items);

  return (
    <>
      <div className="productSection mt-4">
        <div className="container-fluid">
          <div className="row">
            {productData?.map((item) => (
              <div className="col-md-3" key={item.id}>
                <ProductCard
                  productImg={item.img}
                  productName={item.title}
                  productPrice={item.price}
                  productInfo={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
