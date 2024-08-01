import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ giay }) => {
    const [doiGiay,setDoiGiay] = useState(giay[0])
    const setGiay = (chiTietGiay) => {
        setDoiGiay(chiTietGiay)
    }
    console.log(doiGiay)
  return (
    <div className="product">
      <div className="container-fluid px-5 pt-5">
        <div className="product-content text-center">
          <h3 className="nike-font">BEST PRODUCT</h3>
          <p className="mt-3 fs-3">
            We're not waiting on history. We're making it
          </p>
          <button className="btn-hot">Let's Go</button>
        </div>
        <div className="product-item mt-lg-5">
          <div className="giay py-5">
            <div className="row d-flex justify-content-evenly gap-5" id="item1">
                {giay.map((item,index) => {
                    return(
                        <Product giay={item} doiGiay={doiGiay} setGiay={setGiay}/>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
