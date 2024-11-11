import React from "react";
import {
  Card,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import DonutChart from "../../Components/Important/DonutChart";

const MarketingBarchart = ({ title }) => {
  return (
    <React.Fragment>
      <Col>
        <Card className="card card-height-100">
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
            <div className="flex-shrink-0">
              <UncontrolledDropdown className="card-header-dropdown">
                <DropdownToggle
                  tag="a"
                  className="text-reset dropdown-btn"
                  role="button"
                >
                  <span className="week text-muted">
                    This Week
                    <i className="align-items-center ri-arrow-down-s-line"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem>Year</DropdownItem>
                  <DropdownItem>Month</DropdownItem>
                  <DropdownItem>Week</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>

          <div className="card-body">
            <DonutChart
              dataColors={["#F23514", "#FFCC91", "#EB9797"]}
              labels={["Acquisition", "Purchase", "Retention"]}
              series={[44, 55, 41]}
            />
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default MarketingBarchart;
