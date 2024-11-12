import React from "react";
import { Link } from "react-router-dom";
const OrderTable = ({ column, recentOrders }) => {
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
        <thead className="text-muted">
          <tr>
            {column?.map((item, index) => (
              <th key={index} scope="col">
                {item.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        {recentOrders?.length === 0 ? (
          <span>No Data Found</span>
        ) : (
          <tbody>
            {recentOrders.map((item, key) => (
              <tr key={key}>
                <td>
                  <Link to="/apps-ecommerce-order-details" className="order-id">
                    {item.orderId}
                  </Link>
                </td>
                <td>
                  <span className={getStatusClasses(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>{item.vendor}</td>
                <td>
                  <span>{item.departure}</span>
                </td>
                <td>{item.weight}</td>
                <td>
                  <span>{item.arrival}</span>
                </td>
                <td>
                  <span>{item.arrivaldate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrderTable;
