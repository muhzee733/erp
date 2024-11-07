import React from "react";
import FeatherIcon from "feather-icons-react";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ title, icon }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-start">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item pe-2">
                  <FeatherIcon icon={icon} />
                </li>
                <li className="pe-2">/</li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
