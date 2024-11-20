import React, { useState } from "react";
import { Col, Progress, Row } from "reactstrap";
import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import truckImage from "../../assets/images/truck.png";

const TruckLoading = () => {
  const percentage = 100;
  const trucks = [
    { name: "Eicher Pro 2059", plate: "DL04MP7045" },
    { name: "Load Volume", plate: "372,45 in" },
    { name: "Max Weight", plate: "6.5 Tone" },
  ];

  return (
    <div className="trackloading pt-2">
      <Row>
        <Col lg="4">
          {trucks.map((truck, index) => (
            <div key={index} className="d-flex align-items-center mb-3">
              <figure className="m-0">
                <CompanyLogo
                  style={{
                    width: "45px",
                    height: "45px",
                    border: "1px solid lightgray",
                    borderRadius: "30px",
                  }}
                />
              </figure>
              <div style={{ marginLeft: "15px" }}>
                <h5 className="mb-1">{truck.name}</h5>
                <p className="text-muted mb-0">{truck.plate}</p>
              </div>
            </div>
          ))}
        </Col>
        <Col lg="8">
          <div className="truck-loading position-relative">
            <figure className="truck-image">
              <img src={truckImage} alt="Truck" />
            </figure>
            <div
              className="percentage-fill"
              style={{
                width: `${percentage}%`,
              }}
            ></div>
            <div className="percentage-info">
              <span className="percentage-truck">{percentage}%</span>
              <Progress value={60}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TruckLoading;
