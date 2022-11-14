import React from "react";
import "./Contact.css";
import cat from "../cat.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <img className="cat-img" src={cat} alt="" />
      <h1 className="title">Mefish </h1>
      <p>0981-213122</p>
      <p>mefish@fiasd.com</p>
    </div>
  );
};

export default Contact;
