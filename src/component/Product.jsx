import React, { useState } from "react";
import Modals from "./Modals";
const Product = ({ giay, setGiay, doiGiay }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="col-3">
      <div className="img-content text-center overlay-p">
        <img src={giay.image} className="w-75" alt />
        <p className="overlay">${giay.price}</p>
      </div>
      <h3 className="mt-3">{giay.name}</h3>
      <p>{giay.shortDescription}</p>
      <div className="btn-group d-flex gap-3">
        <button className="button-50" onClick={() => {
            setModalShow(true)
            setGiay(giay)
        }}>
          DETAIL
        </button>
        <Modals show={modalShow} doiGiay={doiGiay} onHide={() => setModalShow(false)} />
        <button className="button-50">QUICK ADD</button>
      </div>
    </div>
  );
};

export default Product;
