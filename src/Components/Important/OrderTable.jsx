import React from "react";
import FeatherIcon from "feather-icons-react";
import "./widgets.css";

const OrderTable = ({ column, recentOrders, inloading }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case "Delivered":
        return "status-btn-success";
      case "Active":
        return "status-btn-active";
      case "Cancelled":
        return "status-btn-cancelled";
      default:
        return "status-btn-success";
    }
  };

  return (
    <div className="table-responsive mt-4 mt-xl-0">
      <table className="table table-centered align-middle table-nowrap mb-0">
        {column ? (
          <thead className="text-muted">
            <tr>
              {column?.map((item, index) => (
                <th key={index} scope="col">
                  {item.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
        ) : (
          ""
        )}

        {recentOrders?.length === 0 ? (
          <span>No Data Found</span>
        ) : (
          <tbody>
            {recentOrders?.map((item, key) => (
              <tr key={key}>
                {inloading ? (
                  <td>{item.shipmentId}</td>
                ) : (
                  <td>{item.orderId}</td>
                )}
                {inloading ? (
                  <>
                    <td>
                      <span className="pe-2">{item.departure}</span>
                      <span>-</span>
                      <span className="circle"></span>
                      <span>---</span> 
                      <span className="circleActive"></span>
                      <span>-</span>
                      <span style={{ marginLeft: "6px" }}>{item.arrival}</span>
                    </td>
                  </>
                ) : (
                  ""
                )}
                <td>
                  <span className={getStatusClasses(item.status)}>
                    {item.status}
                  </span>
                </td>
                {inloading ? "" : <td>{item.vendor}</td>}
                {inloading ? (
                  ""
                ) : (
                  <td>
                    <span>{item.departure}</span>
                  </td>
                )}
                {inloading ? "" : <td>{item.weight}</td>}
                {inloading ? (
                  ""
                ) : (
                  <td>
                    <span>{item.arrival}</span>
                  </td>
                )}
                <td>
                  <span>{item.arrivaldate}</span>
                </td>
                {inloading ? (
                  <td style={{ textAlign: "right" }}>
                    <FeatherIcon
                      icon="download"
                      size={30}
                      style={{
                        border: "1px solid whitesmoke",
                        padding: "3px",
                        margin: "0px 5px",
                      }}
                    />
                    <FeatherIcon
                      icon="printer"
                      size={30}
                      style={{ border: "1px solid whitesmoke", padding: "3px" }}
                    />
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrderTable;
