import React, { useState } from "react";
import "./widgets.css";

const Shipping = ({ shipData, setActiveIndex, activeIndex }) => {

  return (
    <div className="shipping w-100 d-flex">
      {shipData?.length > 0 ? (
        shipData.map((items, index) => (
          <span
            key={index}
            className={`badge badge-pill me-2 text-dark border ${
              activeIndex === index ? "bg-danger text-white" : "badge-light"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {items.status.statud_code}
          </span>
        ))
      ) : (
        <div className="text-danger">No data found</div>
      )}
    </div>
  );
};

export default Shipping;
