import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container } from "reactstrap";
import BarChart from "../../Components/Important/BarChat";
import Series from "./data.json";

const Index = () => {
  document.title = "Order | ERP";
  const dataColors = '["--vz-primary", "--vz-success", "#FFE58F"]';

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="8">
            <Row>
              <Col xl="6">
                <BarChart
                  Series={Series}
                  title="Recent Orders"
                  color={dataColors}
                />
              </Col>
              <Col xl="6">
                <BarChart
                  Series={Series}
                  title="Loading Trucks"
                  color={dataColors}
                />
              </Col>
            </Row>
            <Row>
              <Col xl="12">
                <span>Right</span>
              </Col>
            </Row>
          </Col>
          <Col xl="4" className="bg-info">
            <span className="bg-info">Hello</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
