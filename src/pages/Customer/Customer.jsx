import React from "react";
import "./customer.css";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import VendorCard from "../../Components/Important/VendorCard";
import CustomerTable from "../../Components/Important/CustomerTable";
import {ReactComponent as PlusIcon} from "../../assets/images/svg/fi_plus.svg";

const Customer = () => {
  const vendorData = {
    allVendors: {
      count: 1250,
      changePercentage: 15.80,
      changeDirection: "positive",
    },
    activeVendors: {
      count: 1180,
      changePercentage: 85,
      changeDirection: "positive",
    },
    inactiveVendors: {
      count: 70,
      changePercentage: -10,
      changeDirection: "negative",
    },
    returns: {
      count: 0,
      changePercentage: 0.00,
      changeDirection: "neutral",
    },
  };
  const shoppingVendor = {
    newVendors: {
      count: 30,
      changePercentage: -20,
      changeDirection: "negative",
    },
    purchasing: {
      count: 657,
      changePercentage: 0, 
      changeDirection: "neutral",
    },
    abandonedCarts: {
      count: 5,
      changePercentage: 0, 
      changeDirection: "neutral",
    },
    returns: {
      count: 0,
      changePercentage: 0.00,
      changeDirection: "neutral",
    },
  };
  
  
  return (
    <div className="page-content">
      <BreadCrumb icon="home" />
      <Container fluid>
        <Row style={{columnGap:'19px'}}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="card-title" style={{paddingLeft:'05px'}}>Vendor Summary</h4>
            <div className="card-header-action">
              <button className="vendor-btn"><PlusIcon/>Add New Vendor</button>
            </div>
          </div>
          <Col lg={6} className="p-0">
            <VendorCard vendorData={vendorData}  iconClass="ri-user-line" />
          </Col>
        <Col lg={6} className="p-0">
            <VendorCard
             shoppingVendor={shoppingVendor}
              iconClass="ri-shopping-bag-line"
            />
          </Col>
        </Row>
        <Row>
          <CustomerTable />
        </Row>
      </Container>
    </div>
  );
};

export default Customer;
