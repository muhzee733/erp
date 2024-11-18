import React from "react";
import './widgets.css';

const Shipping = ({ shipData }) => {
  return (
    <div className="shipping">
      {shipData?.map((items, index) => {
        return (
          <>
            <span
              key={index}
              className="badge badge-pill badge-light me-2 text-dark border"
            >
              {items.status.statud_code}
            </span>
          </>
        );
      })}
    </div>
  );
};

export default Shipping;
