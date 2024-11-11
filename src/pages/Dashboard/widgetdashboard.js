import React from "react";
import {
  Card, CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

const WidgetDashboard = (props) => {
  return (
    <>
      <Col md={3} sm={12}>
        <Card className="card-animate">
          <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-1">
                  <FeatherIcon icon="pie-chart" />
                </span>
                <div className="flex-shrink-0">
                  <UncontrolledDropdown className="card-header-dropdown">
                    <DropdownToggle
                      tag="a"
                      className="text-reset dropdown-btn"
                      role="button"
                    >
                      <span className="week text-muted">
                        This Week<i className=" ri-arrow-down-s-line"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem>Year</DropdownItem>
                      <DropdownItem>Month</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="sales-card">
                <p className="text-muted">Sales</p>
                <p className="text-muted">Volume</p>
              </div>
              <div className="values">
                <h4>$4,000.00</h4>
                <h4 className="volume-value">
                  450 <span className="text">+20.00%</span>
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Vendors Card */}
      <Col md={3} sm={12}>
        <Card className="card-animate ">
          <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-2">
                  <i className="ri-group-line"></i>
                </span>
                <div className="flex-shrink-0">
                  <UncontrolledDropdown className="card-header-dropdown">
                    <DropdownToggle
                      tag="a"
                      className="text-reset dropdown-btn"
                      role="button"
                    >
                      <span className="text-muted">
                        This Week<i className="ri-arrow-down-s-line"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem>Year</DropdownItem>
                      <DropdownItem>Month</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="card-headings">
                <p className="text-muted">Total Vendors</p>
                <p className="vendors text-muted">Active Vendors</p>
              </div>
              <div className="values">
                <h4>
                  1,250 <span className="text">+15.80%</span>
                </h4>
                <h4>
                  1,180 <span className="text">85%</span>
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Orders Card */}
      <Col md={6} sm={12}>
        <Card className="card-animate">
          <CardBody>
            <div>
              <div className="icon-header">
                <span className="icon-3">
                  <i className="ri-shopping-bag-line"></i>
                </span>
                <div className="flex-shrink-0">
                  <UncontrolledDropdown className="card-header-dropdown">
                    <DropdownToggle
                      tag="a"
                      className="text-reset dropdown-btn"
                      role="button"
                    >
                      <span className="text-muted">
                        This Week<i className="ri-arrow-down-s-line"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem>Year</DropdownItem>
                      <DropdownItem>Month</DropdownItem>
                      <DropdownItem>Daily</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="card-headings">
                <p className="text-muted">All Orders</p>
                <p className="text-muted">Pending</p>
                <p className="text-muted">Completed</p>
                <p className="text-muted">Returns</p>
              </div>
              <div className="values">
                <h4>450</h4>
                <h4>5</h4>
                <h4>45</h4>
                <h4>
                  0 <span className="text">+0.00%</span>
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default WidgetDashboard;
