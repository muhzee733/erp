import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import WidgetDashboard from "./widgetdashboard";
import Recentorders from "../Dashboard/recentorders";
import WidgetMarketing from "../Dashboard/widget-marketing";
import RecentOrderStatus from "../Dashboard/recentorderstatus";
import MarketingBarchart from "./marketing-barchart";

export const Index = () => {
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
];
  return (
    <>
      <div className="page-content">
        <Row>
          <WidgetDashboard />
        </Row>
        <Row>
          <Col xl={7}>
            <Row>
              <Col xl={6}>
                <MarketingBarchart />
              </Col>
              <Col xl={6}>
                <WidgetMarketing />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Recentorders title="Recent Orders" column={column} recentOrders={recentOrders}/>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <RecentOrderStatus title="Recent Orders" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
