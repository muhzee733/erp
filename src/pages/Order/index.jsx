import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container, Card, CardBody, CardHeader, } from "reactstrap";
import BarChart from './BarChart';

const Index = () => {
  document.title = "Order | ERP";

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="7">
            <Row>
              <Col xl="6">
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Basic Area Chart</h4>
                  </CardHeader>
                  <CardBody>
                      <BarChart />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">Col 2</Col>
            </Row>
            <Row>
              <Col xl="12">
                <span>Right</span>
              </Col>
            </Row>
          </Col>
          <Col xl="5" className="bg-info">
            <span className="bg-info">Hello</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
