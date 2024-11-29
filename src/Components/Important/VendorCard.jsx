import React from "react";
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const VendorCard = ({ vendorData, shoppingVendor, iconClass }) => {
  const data = vendorData || shoppingVendor || {};
  return (
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
          </div>
          <div className="sales-card">
            <div>
              <p className="text-muted mb-2">
                {vendorData ? "All Vendors" : "New Vendors"}
              </p>
              <h4 className="m-0">
                {vendorData
                  ? data.allVendors.count
                  : data.newVendors.count}
                <span className={`text ${data.allVendors?.changeDirection || data.newVendors?.changeDirection}`}>
                  {data.allVendors?.changePercentage || data.newVendors?.changePercentage}%
                </span>
              </h4>
            </div>
            <div>
              <p className="text-muted mb-2">
                {vendorData ? "Active Vendors" : "Purchasing"}
              </p>
              <h4 className="m-0">
                {vendorData
                  ? data.activeVendors.count
                  : data.purchasing.count}
                <span className={`text ${data.activeVendors?.changeDirection || data.purchasing?.changeDirection}`}>
                  {data.activeVendors?.changePercentage || data.purchasing?.changePercentage}%
                </span>
              </h4>
            </div>
            <div>
              <p className="text-muted mb-2">
                {vendorData ? "Inactive Vendors" : "Abandoned Carts"}
              </p>
              <h4 className="m-0">
                {vendorData
                  ? data.inactiveVendors.count
                  : data.abandonedCarts.count}
                <span className={`text ${data.inactiveVendors?.changeDirection || data.abandonedCarts?.changeDirection}`}>
                  {data.inactiveVendors?.changePercentage || data.abandonedCarts?.changePercentage}%
                </span>
              </h4>
            </div>
            <div>
              <p className="text-muted mb-2">
                {vendorData ? "Returns" : "Returns"}
              </p>
              <h4 className="m-0">
                {data.returns.count}
                <span className={`text ${data.returns.changeDirection}`}>
                  {data.returns.changePercentage}%
                </span>
              </h4>
            </div>
          </div>
      </CardBody>
    </Card>
  );
};

export default VendorCard;
