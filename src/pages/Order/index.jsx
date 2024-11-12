import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Col, Row, Container, Card, CardBody } from "reactstrap";
import BarChart from "../../Components/Important/BarChat";
import Series from "./data.json";
import DonutChart from "../../Components/Important/DonutChart";
import ChartHeader from "../../Components/Important/ChartHeader";
import "./order.css";
import OrderTable from "../../Components/Important/OrderTable";
import OrderRequest from "../../Components/Important/OrderRequest";

const Index = () => {
  document.title = "Order | ERP";
  const [search, searchList] = useState("");
  const column = [
    "Order Id",
    "VENDOR",
    "STATUS",
    "DEPARTURE",
    "WEIGHT",
    "ARRIVAL",
    "ARRIVALDATE",
  ];
  const recentOrders = [
    {
      id: 1,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 2,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Active",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 3,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Cancelled",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 7,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 8,
      orderId: "ORDERID01",
      vendor: "Raj Industries",
      status: "Delivered",
      departure: "Delhi",
      weight: "250KG",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const unloadingCargo = [
    {
      id: 1,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 2,
      shipmentId: "SHIPID03",
      status: "Cancelled",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const availableCargo = [
    {
      id: 1,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const orderRequest = []

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="8">
            <Row>
              <Col xl="6">
                <Card>
                  <ChartHeader title="Recents Orders" />
                  <CardBody>
                    <BarChart
                      Series={Series}
                      color={'["--vz-primary", "--vz-success", "#FFE58F"]'}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card className="custom-cards">
                  <ChartHeader title="Loading Trucks" />
                  <CardBody className="p-2">
                    <DonutChart
                      labels={[
                        "Active",
                        "loading Delayed",
                        "Unloading Delayed",
                        "Ready to Load",
                        "Ready to Un-load",
                        "Canceled",
                      ]}
                      series={[44, 55, 41, 60, 25]}
                      dataColors={[
                        "#001D66",
                        "#DC4446",
                        "#69B1FF",
                        "#4096FF",
                        "#1677FF",
                        "#003EB3",
                      ]}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl="12">
                <Card>
                  <ChartHeader title="Latest Shipping" layout={true} />
                  <CardBody>
                    <OrderTable column={column} recentOrders={recentOrders} />
                  </CardBody>
                </Card>
                <Card>
                  <ChartHeader title="Unloading Cargo" layout={true} />
                  <CardBody>
                    <OrderTable
                      column={false}
                      recentOrders={unloadingCargo}
                      inloading={true}
                    />
                  </CardBody>
                </Card>
                <Card>
                  <ChartHeader title="Available Cargo" layout={true} />
                  <CardBody>
                    <OrderTable column={false} recentOrders={availableCargo} availCargo={true}/>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="4">
            <Card>
              <ChartHeader
                title="Order Request"
                layout={true}
                search={true}
                placeholder="Search by order id"
                searchList={searchList}
              />
              <OrderRequest />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
