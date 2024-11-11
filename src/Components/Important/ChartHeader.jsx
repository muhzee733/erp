import React from "react";
import {
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import Search from "./Search";

const ChartHeader = ({ title, layout, search, searchList, placeholder }) => {
  const getPreviousMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonthIndex = new Date().getMonth();
    const lastThreeMonths = [];
    for (let i = 0; i < 4; i++) {
      const monthIndex = (currentMonthIndex - i + 12) % 12;
      lastThreeMonths.push(months[monthIndex]);
    }
    const totalMonthsSinceJan = currentMonthIndex + 1;
    return { lastThreeMonths, totalMonthsSinceJan };
  };
  const { lastThreeMonths, totalMonthsSinceJan } = getPreviousMonths();

  return (
    <CardHeader className="align-items-center d-flex">
      <div className="flex-grow-1 d-inline-flex align-items-center">
        <h4 className="card-title mb-0 pe-2">{title}</h4>
        {layout ? (
          ""
        ) : (
          <div className="d-inline-flex align-items-center">
            <FeatherIcon
              icon="arrow-up"
              size="16"
              className="text-success me-1"
            />
            <span className="text-success">40%</span>
          </div>
        )}
      </div>
      <div className="flex-shrink-0">
        {layout ? (
          <>
            {search ? (
              <Search searchList={searchList} placeholder={placeholder}/>
            ) : (
              <button type="button" className="btn view-all">
                View All
              </button>
            )}
          </>
        ) : (
          <UncontrolledDropdown className="card-header-dropdown">
            <DropdownToggle
              tag="a"
              className="text-reset dropdown-btn d-flex align-items-center justify-content-center gap-2"
              role="button"
              style={{
                border: "1px solid #e9ebec",
                padding: "7px 8px 0px 10px",
                borderRadius: "6px",
              }}
            >
              <h6 className="text-muted">{lastThreeMonths[0]}</h6>
              <FeatherIcon
                icon="chevron-down"
                size="20"
                style={{ marginTop: "-5px" }}
              />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end w-auto">
              {lastThreeMonths.slice(1).map((month, index) => (
                <DropdownItem key={index}>{month}</DropdownItem>
              ))}
              <DropdownItem divider />
              <DropdownItem>{`Last ${totalMonthsSinceJan} months`}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
      </div>
    </CardHeader>
  );
};

export default ChartHeader;
