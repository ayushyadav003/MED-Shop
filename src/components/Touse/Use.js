import React from "react";
import './use.css'

export default function Ayush() {
  let fontStyle = {
    fontWeight: "500",
  };
    
  return (
    <div className="Container">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/mxlJIOIMuyoNmCVZsHSZw/2c8cb79b9f24c268342405d97839522e/Aesop-Skin-Gentle-Facial-Cleansing-Milk-Texture-50-50-Tablet-1536x950px.jpg"
            alt="" className="image"/>
      <div className="text">
        <p style={{fontWeight:"500"}}>How to use</p>
        <p style={{ fontSize: "1.4rem" }}>
          Morning and evening, shake before use; then dispense a small amount
          onto hands and massage over face and neck. Rinse with tepid water, or
          remove using a damp cloth.
        </p>
        <hr style={{ borderTop: " 2.2px solid black" }}></hr>
        <p style={fontStyle}>Dosage</p>
        <p>Half a teaspoon</p>
        <hr></hr>
        <p style={fontStyle}>Texture</p>
        <p>Non-foaming, water-soluble emulsion</p>
        <hr></hr>
        <p style={fontStyle}>Aroma</p>
        <p>Mild, woody, herbaceous</p>
      </div>
    </div>
  );
}