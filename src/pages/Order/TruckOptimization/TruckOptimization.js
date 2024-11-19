import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row, Spinner } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ChartHeader from "../../../Components/Important/ChartHeader";
import Shipping from "../../../Components/Important/Shipping";
import ShipCard from "../../../Components/Important/ShipCard";

const TruckOptimization = () => {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const shipData = [
    {
      id: 1,
      status: {
        status_code: "Arriving",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID01",
    },
    {
      id: 2,
      status: { status_code: "Loading", ship_date_time: "17 July 2024, 18:00" },
      shipId: "SHIPID02",
    },
    {
      id: 3,
      status: {
        status_code: "Available",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID03",
    },
    {
      id: 4,
      status: {
        status_code: "Unloading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID04",
    },
    {
      id: 5,
      status: {
        status_code: "Departed",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID05",
    },
    {
      id: 6,
      status: {
        status_code: "Departed",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID06",
    },
    {
      id: 7,
      status: {
        status_code: "Arriving",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID07",
    },
    {
      id: 8,
      status: { status_code: "Loading", ship_date_time: "17 July 2024, 18:00" },
      shipId: "SHIPID08",
    },
    {
      id: 9,
      status: {
        status_code: "Unloading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID09",
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
          <Col xl="3">
            <Card className="h-100">
              <ChartHeader
                title="Vehicles"
                layout={true}
                search={true}
                placeholder="Search by Shipment ID"
                searchList={setSearch}
              />
              <CardBody >
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
                      <ShipCard key={item.id} item={item} />
                    ))
                  : !loading && <p>No records found.</p>}
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">col - 6</Col>
          <Col xl="3">col - 4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default TruckOptimization;
