import React, { useState, useEffect } from "react";
import { Card, Col, Row, CardBody } from "reactstrap";
import ChartHeader from "../../../Components/Important/ChartHeader";
import Route from "../../../Components/Important/Route";

const RoutePlanning = () => {
  const routes = [
    {
      routeId: "ROUTEAA001",
      start: "Mumbai",
      destination: "Delhi",
      status: "delivered",
      vehicles: [
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA002",
      start: "Chennai",
      destination: "Bangalore",
      status: "inprogress",
      vehicles: [
        {
          id: "SHIPID01235",
          route: "Chennai → Bangalore",
          vehicleNumber: "KA01AB5678",
          estimateTime: "8 Hrs",

          shipmentId: "SHIPID10002",
          pickupDate: "2024-12-06T09:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
        {
          id: "SHIPID01234",
          route: "Mumbai → Delhi",
          vehicleNumber: "DL04MP0123",
          estimateTime: "6 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10001",
          pickupDate: "2024-12-05T18:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA003",
      start: "Pune",
      destination: "Hyderabad",
      vehicles: [
        {
          id: "SHIPID01236",
          route: "Pune → Hyderabad",
          vehicleNumber: "TS07CD3456",
          estimateTime: "7 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10003",
          pickupDate: "2024-12-07T12:00:00",
        },
        {
          id: "SHIPID01236",
          route: "Pune → Hyderabad",
          vehicleNumber: "TS07CD3456",
          estimateTime: "7 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10003",
          pickupDate: "2024-12-07T12:00:00",
        },
      ],
    },
    {
      routeId: "ROUTEAA004",
      start: "Kolkata",
      destination: "Guwahati",
      vehicles: [
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "delivered",

          shipmentId: "SHIPID10004",
          pickupDate: "2024-12-08T15:00:00",
        },
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "inprogress",

          shipmentId: "SHIPID10004",
          pickupDate: "2024-12-08T15:00:00",
        },
        {
          id: "SHIPID01237",
          route: "Kolkata → Guwahati",
          vehicleNumber: "WB04EF6789",
          estimateTime: "10 Hrs",
          status: "delivered",
              shipmentId: "SHIPID10004",
              pickupDate: "2024-12-08T15:00:00",
        },
      ],
    },
  ];

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredOrders = routes;
    if (search.trim() !== "") {
      filteredOrders = filteredOrders.filter((item) =>
        item.routeId.toLowerCase().includes(search.toLowerCase())
      );
    }
      if (activeStatus) {
      setLoading(true); 
      filteredOrders = filteredOrders.filter(
        (item) => item.status === activeStatus
      );
    }
  
    setTimeout(() => {
      setFilteredData(filteredOrders);
      setLoading(false);
    }, 500);
  }, [search, activeStatus]);
  
  return (
    <div className="page-content">
      <Row>
        <Col xl={8}> col-1</Col>
        <Col xl={4}>
          <Card className="h-100">
            <ChartHeader
              title="Routes"
              layout={true}
              search={true}
              placeholder="Search by Route No"
              searchList={setSearch}
            />
            <CardBody>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Route routeData={filteredData} title="Routes" />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RoutePlanning;
