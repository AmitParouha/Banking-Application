import React from "react";
import "./Card.css";

function Card({ header, description, button }) {
  return (
    <div className="cards">
      <div className="child-card">
        <h2>{header}</h2>
        <p>
          <span>{description}</span>
        </p>
        <button>
          <a href="#app">{button}</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
