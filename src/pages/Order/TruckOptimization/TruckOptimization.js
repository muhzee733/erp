import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import ChartHeader from "../../../Components/Important/ChartHeader";
import Shipping from "../../../Components/Important/Shipping";
import ShipCard from "../../../Components/Important/ShipCard";

const TruckOptimization = () => {
  const [search, searchList] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const shipData = [
    {
      id: 1,
      status: {
        statud_code: "Arriving",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID01",
    },
    {
      id: 2,
      status: {
        statud_code: "Loading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID02",
    },
    {
      id: 3,
      status: {
        statud_code: "Available",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID03",
    },
    {
      id: 4,
      status: {
        statud_code: "Unloading",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID04",
    },
    {
      id: 5,
      status: {
        statud_code: "Departed",
        ship_date_time: "17 July 2024, 18:00",
      },
      shipId: "SHIPID05",
    },
  ];
  return (
    <div className="page-content">
      <BreadCrumb title="Orders" icon="home" />
      <Container fluid>
        <Row>
          <Col xl="3">
            <Card>
              <ChartHeader
                title="Vehicles"
                layout={true}
                search={true}
                placeholder="Search by id..."
                searchList={searchList}
              />
              <CardBody>
                <Shipping
                  shipData={shipData}
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                />
                {shipData?.map((item, index) => {
                  return <ShipCard item={item} index={index}/>;
                })}
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
