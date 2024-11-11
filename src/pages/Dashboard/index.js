import React, { useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
} from "reactstrap";
import WidgetDashboard from "./widgetdashboard";
import Recentorders from "../Dashboard/recentorders";
import WidgetMarketing from "../Dashboard/widget-marketing";
import RecentOrderStatus from "../Dashboard/recentorderstatus";
import MarketingBarchart from "./marketing-barchart";
import classnames from "classnames";
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";

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
  const LiveOrders = [
    {
      id: 1,
      img: product1,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      id: 2,
      img: product2,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 3,
      img: product1,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      id: 4,
      img: product2,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 5,
      img: product2,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      id: 6,
      img: product2,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 7,
      img: product1,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 8,
      img: product1,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 9,
      img: product1,
      product: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Completed",
    },
  ];

  const [customActiveTab, setCustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

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
                <MarketingBarchart title="Marketing" />
              </Col>
              <Col xl={6}>
                <WidgetMarketing />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Recentorders
                  title="Recent Orders"
                  column={column}
                  recentOrders={recentOrders}
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody>
                <Nav
                  tabs
                  className=" recent-tabs  nav-justified mb-3"
                >
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: customActiveTab === "1",
                      })}
                      onClick={() => {
                        toggleCustom("1");
                      }}
                    >
                      Recent Orders
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: customActiveTab === "2",
                      })}
                      onClick={() => {
                        toggleCustom("2");
                      }}
                    >
                      Returns
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={customActiveTab} className="text-muted">
                  <TabPane tabId="1" id="home1">
                    <RecentOrderStatus LiveOrders={LiveOrders} />
                  </TabPane>
                  <TabPane tabId="2">
                    <RecentOrderStatus LiveOrders={LiveOrders} returnValue={true}/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
