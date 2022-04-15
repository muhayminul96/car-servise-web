import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";


const Service = ({ service }) => {
    const navigate = useNavigate()
    const navigateSerciceDetails = id => {
        navigate(`/service/${id}`)

    }
    const { name, id, img, description, price } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p> price ${price} </p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => navigateSerciceDetails(id)} className="btn btn-primary" value={id}>
        Get {name}{" "}
      </button>
    </div>
  );
};

export default Service;
