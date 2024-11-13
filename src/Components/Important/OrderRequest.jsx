import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import React from "react";
import { Card } from "reactstrap";
import Icon from "../../assets/images/svg/FileSyncOutlined.svg";
import Icon2 from "../../assets/images/svg/Vector.svg";

const OrderRequest = ({ title, recentOrderRequest }) => {
  return (
    <div className="request-order">
      <div className="icon-header">
        <span className="title">{title}</span>
        <div className="icons">     
          <img className="file-icon" src={Icon} />
          <img src={Icon2} />
        </div>
      </div>
      {recentOrderRequest?.map((item, key) => (
        <Card key={key} className="order-card">
          <div className="order-header">
            <div>
              <CompanyLogo className="order-icon" />
              <span>{item.orderID}</span>
            </div>
            <span className="order-date ">
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
            <a href="#" className="view-details">
              View Details
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrderRequest;
