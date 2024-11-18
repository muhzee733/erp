import React from "react";
import { ReactComponent as MyIcon } from "../../assets/images/fast-delivery.svg";
import classnames from "classnames";

const ShipCard = ({ item, index }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "Delivered":
        return "status-btn-success";
      case "Active":
        return "status-btn-active";
      case "Cancelled":
        return "status-btn-cancelled";
      default:
        return "status-btn-success";
    }
  };
  return (
    <div className="mt-3 border rounded" key={index}>
      <div className="ship-wrapper">
        <div className="ship-header p-3 d-flex align-items-center justify-content-between  border-bottom">
          <div className="d-flex gap-2">
            <MyIcon />
            <span> SHIPID01</span>
          </div>
          <div>
            <span className={getStatusClasses("Delivered")}>Delivered</span>
          </div>
        </div>
        <div className="ship-body p-3">
          <div className="profile-timeline">
            <div className="timeline-item p-0 d-flex align-items-center">
              <div className="flex-shrink-0 avatar-xs">
                <div className="avatar-title bg-success rounded-circle">
                  <i className="ri-shopping-bag-line"></i>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <span className="fs-15 mb-0 fw-semibold">
                  Arriving
                </span>
                <span className="fw-normal">Wed, 15 Dec 2021</span>
              </div>
            </div>
            <div className="timeline-item d-flex align-items-center mb-4">
              <div className="flex-shrink-0 avatar-xs">
                <div className="avatar-title bg-light text-success rounded-circle">
                  <i className="ri-takeaway-fill"></i>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-14 mb-0 fw-semibold">Out For Delivery</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
