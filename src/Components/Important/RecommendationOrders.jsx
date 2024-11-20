import React, { useState } from "react";
import Icon from "../../assets/images/svg/weight.svg";
import Icon2 from "../../assets/images/svg/route.svg";
import Icon3 from "../../assets/images/svg/calender.svg";
import "./widgets.css";
import { Card, CardBody, Col, Row } from "reactstrap";

const RecommendationOrders = ({ title, shipOrders }) => {
  const [activeIcon, setActiveIcon] = useState("icon1");

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <Row>
        <div className="icon-header">
          <span className="title">{title}</span>
          <div className="icons">
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive me-2 ${
                activeIcon === "icon1" ? "icon-active" : ""
              }`}
              src={Icon}
              alt="Icon 1"
              onClick={() => handleIconClick("icon1")}
            />
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive me-2 ${
                activeIcon === "icon2" ? "icon-active" : ""
              }`}
              src={Icon2}
              alt="Icon 2"
              onClick={() => handleIconClick("icon2")}
            />
            <img
              style={{ cursor: "pointer" }}
              className={`icon-inactive ${
                activeIcon === "icon3" ? "icon-active" : ""
              }`}
              src={Icon3}
              alt="Icon 3"
              onClick={() => handleIconClick("icon3")}
            />
          </div>
        </div>
      </Row>
      <Row>
        <Col xl={6}>
          <Card>
            <div className="orders-div">
              <p className="d-flex recommendationorder-id">ID: ORDERID0123</p>
              <div class="info">
                <div class="info-item mb-1">
                  <img src={Icon}></img>
                  <span>88.9 kg</span>
                </div>
                <div class="d-flex info-item">
                  <img src={Icon2}></img>
                  <span>ROUTEEAA001</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl={6}>Col-2</Col>
      </Row>
    </>
  );
};

export default RecommendationOrders;
