import React, { useState } from "react";
import { CardBody, Col, Row, Card } from "reactstrap";
import { ReactComponent as CompanyLogo } from "../../assets/images/svg/CodeSandboxOutlined.svg";
import truckImage from "../../assets/images/truck.png";
import FeatherIcon from "feather-icons-react";

const TruckLoading = () => {
  const percentage = 50;
  const trucks = [
    { name: "Eicher Pro 2059", plate: "DL04MP7045" },
    { name: "Load Volume", plate: "372,45 in" },
    { name: "Max Weight", plate: "6.5 Tone" },
  ];

  return (
    <div className="trackloading pt-2">
      <Row>
        <Col lg="4">
          {trucks?.map((truck, index) => (
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

            <div className="percentage-info">
              <div className="progress" style={{ height: "15px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: `${percentage}%` }}
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {percentage}%
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardBody>
            <div className="d-flex gap-2">
              <h3>Load Management</h3>
              <button
                type="button"
                class="border-0"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
                style={{ background: "transparent" }}
              >
                <FeatherIcon icon="alert-circle" />
              </button>
            </div>
            <Row className="mt-3">
              <Col lg="7">
                <div className="scale">
                  <div className="scale-item">0%</div>
                  <div className="scale-item">25%</div>
                  <div className="scale-item">50%</div>
                  <div className="scale-item">75%</div>
                  <div className="scale-item">100%</div>
                </div>
                <div className="progress bar-custom my-4" style={{ height: "40px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col lg="5" className="d-flex align-items-center gap-2">
                <h5 className="font-weight-bold text-dark m-0">2.5 Ton</h5>
                <span>Out of 6.5 Ton is Available</span>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </div>
  );
};

export default TruckLoading;
