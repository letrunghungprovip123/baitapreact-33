import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-black text-light py-4 px-5 px-lg-0">
        <div className="container-fluid pt-lg-2 px-lg-5 ">
          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col p-0">
              <h3 className="fw-bold">CONTACTS</h3>
              <p>
                <span>Address: </span>922/3 Cách Mạng Tháng 8,Phường 5, Quận Tân
                Bình, TP.HCM
              </p>
              <p>
                <span>Hotline: </span>0901375677
              </p>
              <p>
                <span>Email: </span>saigonsneakerstore@gmail.com
              </p>
            </div>
            <div className="col p-0 ps-lg-3">
              <h3 className="fw-bold">WORK HOURS</h3>
              <p>9:30 -- 21: 30</p>
            </div>
            <div className="col p-0">
              <h3 className="fw-bold">REGISTER FOR THE NEW INFO</h3>
              <div className="row row-cols-2 w-75 ps-3">
                <input type="text" placeholder="Email" className="col-9" />
                <input
                  name
                  id
                  className="btn btn-light col-2"
                  type="button"
                  defaultValue="Send"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center m-0">© ShoesShopProject 2024</p>
      </div>
    </div>
  );
};

export default Footer;
