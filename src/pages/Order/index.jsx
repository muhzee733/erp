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
import CompanyLogo from "../../assets/images/svg/CodeSandboxOutlined.svg";
import CompanyName from "../../assets/images/svg/companyname.svg";



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
    {
      id: 3,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      shipmentId: "SHIPID03",
      status: "Cancelled",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
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
    {
      id: 2,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 3,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 4,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 5,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
    {
      id: 6,
      shipmentId: "SHIPID03",
      status: "Delivered",
      departure: "Delhi",
      arrival: "Mumbai",
      arrivaldate: "17 July 2024",
    },
  ];
  const orderRequest = [
    {
      orderID: "ORDERID01",
      date: "16 July 2024",
      time: "18:00",
      pickupLocation: {
        address: "123 Main St, Anytown, CA 12345"
      },
      destination: {
        address: "456 Elm St, Smalltown, NY 54321"
      },
      company: {
        name: "Raj Industries",
        logo: CompanyLogo,
        img: CompanyName,
      }
    },
    {
      orderID: "ORDERID02",
      date: "17 July 2024",
      time: "18:00",
      pickupLocation: {
        address: "789 Oak St, Metropolis, IL 62960"
      },
      destination: {
        address: "321 Pine St, Springfield, MO 65807"
      },
      company: {
        name: "Global Logistics",
        logo: CompanyLogo,
        img: CompanyName,
      }
    },
    {
      orderID: "ORDERID03",
      date: "18 July 2024",
      time: "18:00",
      pickupLocation: {
        address: "456 Maple Ave, Gotham, NY 10001"
      },
      destination: {
        address: "789 Cedar Rd, Star City, SC 29201"
      },
      company: {
        name: "NextGen Transport",
        logo: CompanyLogo,
        img: CompanyName,
      }
    },
    {
      orderID: "ORDERID04",
      date: "19 July 2024",
      time: "16:45",
      pickupLocation: {
        address: "101 Birch St, Central City, KY 42330"
      },
      destination: {
        address: "202 Elm St, Coast City, CA 94546"
      },
      company: {
        name: "Prime Movers",
        logo: CompanyLogo,
        img: CompanyName,
      }
    },
    {
      orderID: "ORDERID05",
      date: "20 July 2024",
      time: "11:00",
      pickupLocation: {
        address: "303 Willow Ln, Bludhaven, NJ 08505"
      },
      destination: {
        address: "404 Oak Dr, Keystone, PA 17055"
      },
      company: {
        name: "Express Haulers",
        logo: CompanyLogo,
        img: CompanyName, 
      }
    }
  ]
  

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="8">
            <Row className="d-flex align-items-stretch">
              <Col xl="6" xxl="6" lg="6" className="d-flex">
                <Card className="w-100">
                  <ChartHeader title="Recents Orders" />
                  <CardBody>
                    <BarChart
                      Series={Series}
                      color={'["--vz-primary", "--vz-success", "#FFE58F"]'}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" xxl="6" lg="6" className="d-flex">
                <Card className="custom-cards w-100" >
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
          <Col xl="4" >
            <Card >
              <ChartHeader
                title="Order Request"
                layout={true}
                search={true}
                placeholder="Search by order id"
                searchList={searchList}
               />
              <OrderRequest recentOrderRequest={orderRequest} 
              title="Recent Order Requests" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
