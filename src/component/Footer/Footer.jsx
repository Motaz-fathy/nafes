import React from "react";

import "./footer.css";
export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="item" >
         <i className="pi pi-instagram"></i>
         <i className="pi pi-twitter"></i>
         <i className="pi pi-facebook"></i>
        </div>
        <div className="item" >
            <h4>جميع الحقوق محفوظة-نافس 2020</h4>
        </div>
        <div className="item" >
            <img src="./images/nafes_plus_logo.png"></img>
        </div>
      </div>
    </section>
  );
};
