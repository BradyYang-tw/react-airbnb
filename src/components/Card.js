import React from "react";
import k from "../katie-zaferes-hero.png";
import star from "../star.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-badge"> SOLD OUT</div>
      <img className="k" src={k} alt="" />

      <div className="card-state">
        <img className="star" src={star} alt="" />
        <span>{props.rating}</span>
        <span>{`(${props.reviewCount})`} </span>
        <span>{props.country}</span>
      </div>

      <p>{props.title}</p>
      <p>
        <span style={{ fontWeight: "bold" }}>From ${`${props.price}`}</span> /
        person
      </p>
    </div>
  );
};

export default Card;
