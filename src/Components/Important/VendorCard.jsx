import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const VendorCard = ({
  title1,
  title2,
  title3,
  title4,
  allOrders,
  allOrdersPercentage,
  completedOrders,
  completedOrdersPercentage,
  pendingOrders,
  pendingOrdersPercentage,
  returns,
  returnsPercentage,
  iconClass
}) => {
  return (
    <>
      <Card className="card-animate">
        <CardBody>
          <div>
            <div className="icon-header">
              <span className="icon-3">
                <i className={iconClass}></i>
              </span>
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
            </div>
            <div className="sales-card">
              <div>
                <p className="text-muted mb-2">{title1}</p>
                <h4 className="m-0">{allOrders}
                <span className="text">{allOrdersPercentage}</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">{title2}</p>
                <h4 className="m-0">{pendingOrders}
                <span className="text">{pendingOrdersPercentage}</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">{title3}</p>
                <h4 className="m-0">{completedOrders}
                <span className="text">{completedOrdersPercentage}</span>
                </h4>
              </div>
              <div>
                <p className="text-muted mb-2">{title4}</p>
                <h4 className="m-0">
                  {returns}
                  <span className="text">{returnsPercentage}</span>
                </h4>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default VendorCard;
