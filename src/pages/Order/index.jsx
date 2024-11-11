import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container } from "reactstrap";
import BarChart from "../../Components/Important/BarChat";
import Series from "./data.json";
import RecentOrders from "../Dashboard/recentorders";

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
                <RecentOrders title="Latest Shipping"
                orderId="ORDER ID" 
                customer="Customer"
                status="STATUS"
                departure="DEPARTURE"
                weight="WEIGHT"
                arrival="ARRIVAL"
                arrivaldate="ARRIVALDATE" />
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
