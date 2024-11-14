import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import React, {useState} from "react";
import { Col, Row , Card} from "reactstrap";
import Icon from "../../assets/images/svg/FileSyncOutlined.svg";
import Icon2 from "../../assets/images/svg/Vector.svg";
import "./widgets.css";
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
          <img className="file-icon" src={Icon} alt="Icon" />
          <img src={Icon2} alt="Icon" />
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
          <span className="hr-border"></span>
          <div className="row">
            <div className="col-lg-12">
              <div className="timeline-2">
                <div className="timeline-continue">
                  <Row className="timeline-right">
                    <Col xs={12}>
                      <p className="timeline-date text-muted">Pickup Location</p>
                    </Col>
                    <Col xs={12}>
                      <p className="timeline-date">
                        123 Main St, Anytown CA 12345
                      </p>
                    </Col>
                    <Col xs={12}>
                      <p className="timeline-date text-muted">Destination</p>
                    </Col>
                    <Col xs={12}>
                      <p className="data">
                        456 Elm St, Smalltown, NY 54321
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <span className="hr-border"></span>

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
