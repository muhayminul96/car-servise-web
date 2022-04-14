import React from "react";
import './Service.css'

const Service = ({ service }) => {
  const { name, id, img, description, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p> price ${price} </p>
      <p>
        <small>{description}</small>
      </p>
      <button value={id}>Get {name} </button>
    </div>
  );
};

export default Service;
