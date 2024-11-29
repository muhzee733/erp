import React from "react";
import "./customer.css";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import VendorCard from "../../Components/Important/VendorCard";
import CustomerTable from "../../Components/Important/CustomerTable";
import {ReactComponent as PlusIcon} from "../../assets/images/svg/fi_plus.svg";

const Customer = () => {
  return (
    <div className="page-content">
      <BreadCrumb title="Customers" icon="home" />
      <Container fluid>
        <Row>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="card-title" style={{paddingLeft:'05px'}}>Vendor Summary</h4>
            <div className="card-header-action">
              <button className="vendor-btn"><PlusIcon/>Add New Vendor</button>
            </div>
          </div>
          <Col xl={6}>
            <VendorCard
              title1="All Vendors"
              title2="Active"
              title3="In-Active"
              title4="Returns"
              allOrders="1250"
              allOrdersPercentage="+15.80%"
              pendingOrders="1180"
              pendingOrdersPercentage="+85%"
              completedOrders="70"
              completedOrdersPercentage="-10%"
              returns="0"
              returnsPercentage="+0.00%"
              iconClass="ri-group-line"
            />
          </Col>
          <Col xl={6}>
            <VendorCard
              title1="New Vendors"
              title2="Purchasing"
              title3="Abandoned Carts"
              title4="Returns"
              allOrders="30"
              allOrdersPercentage="-20%"
              pendingOrders="657"
              completedOrders="5"
              returns="0"
              returnsPercentage="+0.00%"
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
