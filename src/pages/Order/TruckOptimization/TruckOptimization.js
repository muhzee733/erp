import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ChartHeader from "../../../Components/Important/ChartHeader";
import Shipping from "../../../Components/Important/Shipping";
import ShipCard from "../../../Components/Important/ShipCard";
import TruckLoading from "../../../Components/Important/TruckLoading";
import RecommendationOrders from "../../../Components/Important/RecommendationOrders";

const TruckOptimization = () => {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const shipData = [
    {
      orderID: 1,
      status: {
        status_code: "Arriving",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID01",
    },
    {
      orderID: 2,
      status: { status_code: "Loading", ship_date_time: "17 July 2024, 18:00" },
      shipId: "SHIPID02",
    },
    {
      orderID: 3,
      status: {
        status_code: "Available",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID03",
    },
    {
      orderID: 4,
      status: {
        status_code: "Unloading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID04",
    },
    {
      orderID: 5,
      status: {
        status_code: "Departed",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID05",
    },
    {
      orderID: 6,
      status: {
        status_code: "Departed",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID06",
    },
    {
      orderID: 7,
      status: {
        status_code: "Arriving",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID07",
    },
    {
      orderID: 8,
      status: { status_code: "Loading", ship_date_time: "17 July 2024, 18:00" },
      shipId: "SHIPID08",
    },
    {
      orderID: 9,
      status: {
        status_code: "Unloading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID09",
    },
  ];
  const shipOrders = [
    {
      orderID: "ORDERID0123",
      weight: "88.9",
      route: "ROUTEEAA001",
    },
    {
      orderID: "ORDERID0124",
      weight: "120.5",
      route: "ROUTEEAA002",
    },
    {
      orderID: "ORDERID0125",
      weight: "75.3",
      route: "ROUTEEAA003",
    },
    {
      orderID: "ORDERID0126",
      weight: "45.8",
      route: "ROUTEEAA004",
    },
    {
      orderID: "ORDERID0127",
      weight: "99.4",
      route: "ROUTEEAA005",
    },
  ];

  useEffect(() => {
    setLoading(true);

    let filteredOrders = shipData;

    if (search.length > 7) {
      filteredOrders = filteredOrders.filter((item) =>
        item.shipId.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (activeStatus) {
      filteredOrders = filteredOrders.filter(
        (item) => item.status.status_code === activeStatus
      );
    }

    setTimeout(() => {
      setFilteredData(filteredOrders);
      setLoading(false);
    }, 500);
  }, [search, activeStatus]);

  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="3" className="d-flex flex-column h-100">
            <Card className="h-100">
              <ChartHeader
                title="Vehicles"
                layout={true}
                search={true}
                placeholder="Search by Shipment ID"
                searchList={setSearch}
              />
              <CardBody className="ship-cardbody">
                <Shipping
                  shipData={shipData}
                  setActiveStatus={setActiveStatus}
                  activeStatus={activeStatus}
                />
                {loading && (
                  <div className="d-flex align-items-center justify-content-center mt-6 mb-6">
                    <Spinner color="dander" type="grow">
                      Loading...
                    </Spinner>
                  </div>
                )}
                {!loading && filteredData.length > 0
                  ? filteredData.map((item) => (
                      <ShipCard key={item.orderID} item={item} />
                    ))
                  : !loading && <p>No records found.</p>}
              </CardBody>
            </Card>
          </Col>
          <Col xl="9">
            <Row>
              <Col xl="8">
                <Card>
                  <CardBody>
                    <TruckLoading />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                <Card className="h-100">
                  <ChartHeader
                    title="Orders"
                    layout={true}
                    search={true}
                    placeholder="Search by Order ID, No."
                    searchList={setSearch}
                  />
                  <CardBody>
                    <RecommendationOrders
                      title="Recommendation"
                      shipOrders={shipOrders}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TruckOptimization;
