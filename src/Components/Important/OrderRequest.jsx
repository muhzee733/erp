import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import React, { useState } from "react";
import { Card } from "reactstrap";
import Icon from "../../assets/images/svg/FileSyncOutlined.svg";
import Icon2 from "../../assets/images/svg/Vector.svg";
import OffCanvas from "../Important/OffCanvas"; 

const OrderRequest = ({ title, recentOrderRequest }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const toggleOffcanvas = (orderId) => {
    console.log("Selected Order ID:", orderId); 
    setSelectedOrderId(orderId === selectedOrderId ? null : orderId);
  };

  return (
    <div className="request-order">
      <div className="icon-header">
        <span className="title">{title}</span>
        <div className="icons">
          <svg className="file-icon" src={Icon} alt="Icon" />
          <svg src={Icon2} alt="Icon" />
        </div>
      </div>
      {recentOrderRequest?.map((item, key) => (
        <Card key={key} className="order-card">
          <div className="order-header">
            <div>
              <CompanyLogo className="order-icon" />
              <span>{item.orderID}</span>
            </div>
            <span className="order-date">
              {item.date} {item.time}
            </span>
          </div>

          <div className="order-body">
            <div className="location-info">
              <div className="pickup">
                <div className="label">Pickup Location</div>
                <div className="address">{item.pickupLocation.address}</div>
              </div>
              <div className="destination" style={{ marginTop: "10px" }}>
                <div className="label">Destination</div>
                <div className="address">{item.destination.address}</div>
              </div>
            </div>
            <div className="map-thumbnail">
              <img src="https://via.placeholder.com/60" alt="Map Thumbnail" />
            </div>
          </div>

          <div className="order-footer">
            <div className="company-info">
              <img src={item.company.img} alt={`${item.company.name} Logo`} />
              {item.company.name}
            </div>
            <a
              onClick={(e) => {
                e.preventDefault();
                toggleOffcanvas(item.orderID);
              }}
              href="#"
              className="view-details"
            >
              View Details
            </a>
          </div>
        </Card>
      ))}

      {/* Conditionally render OffCanvas component */}
      {selectedOrderId && (
        <OffCanvas title="Order Request Details"
          isOpen={!!selectedOrderId} 
          toggle={() => setSelectedOrderId(null)} 
          orderDetails={recentOrderRequest.find(item => item.orderID === selectedOrderId)}
        />
      )}
    </div>
  );
};

export default OrderRequest;
