import React from "react";
import "./widgets.css";
import { Alert } from "reactstrap";


const Shipping = ({ shipData, setActiveStatus, activeStatus }) => {
  const statusCodes = [
    ...new Set(shipData.map((item) => item.status.status_code)),
  ];

  return (
    <div className="shipping w-100 d-flex">
      {statusCodes.length > 0 ? (
        statusCodes.map((status, index) => (
          <span
            key={index}
            className={`badge badge-pill me-2 text-dark border ${
              activeStatus === status ? "bg-danger text-white" : "badge-light"
            }`}
            onClick={() =>
              setActiveStatus(activeStatus === status ? null : status)
            }
          >
            {status}
          </span>
        ))
      ) : !loading && (
        <Alert style={{marginTop:"15px"}} color="danger">
          <strong>No Order Found</strong>
        </Alert>
      )}
    </div>
  );
};

export default Shipping;
