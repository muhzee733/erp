import React, { useState } from "react";
import { ReactComponent as Vehicle } from "../../assets/images/svg/Ellipse-vehicle.svg";

const Route = ({ routeData }) => {
  const [expandedRoutes, setExpandedRoutes] = useState({});

  const toggleVehicles = (routeId) => {
    setExpandedRoutes((prevState) => ({
      ...prevState,
      [routeId]: !prevState[routeId], 
    }));
  };

  return (
    <>
      {routeData.map((route, index) => (
        <div key={index} className="route-card">
          <div className="route-header">
            <div className="d-flex">
              <h4 className="route-id">{route.routeId}</h4>
              <hr
                className="m-0 hr-line"
                style={{
                  width: "100%",
                  borderWidth: "2px",
                  textAlign: "right",
                  marginTop: "12px!important",
                  color: "#00000073",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p className="route-destination">
                {route.start} &mdash;&mdash;&gt; {route.destination}
              </p>
              <a style={{ color: "#1677FF" }} href="#" className="view-more">
                View More
              </a>
            </div>
          </div>

          {route.vehicles.length > 0 ? (
            <div className="vehicles-list">
              {(
                expandedRoutes[route.routeId] ? route.vehicles : route.vehicles.slice(0, 3)
              ).map((vehicle, vehicleIndex) => (
                <div key={vehicleIndex} className="vehicle-item">
                  <div className="d-flex m-0 justify-content-between align-items-center">
                    <div>
                      <Vehicle style={{ marginRight: "5px", width:"40px", height:"36px", }} />
                      ID: {vehicle.id}
                    </div>
                    <div>
                      <p className="m-0">{vehicle.vehicleNumber}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="route-destination">
                      {route.start} &mdash;&mdash;&gt; {route.destination}
                    </p>
                    <p className="route-destination">
                      Estimate Time: {vehicle.estimateTime}
                    </p>
                  </div>
                </div>
              ))}

              {route.vehicles.length > 3 && (
                <div className="vehicle-summary">
                  <div
                    className="d-flex align-items-center"
                    onClick={() => toggleVehicles(route.routeId)}
                    style={{
                      cursor: "pointer",
                      color: "#1677FF",
                      marginTop: "10px",
                    }}
                  >
                    <Vehicle style={{ marginRight: "5px" }} />
                    <span className="text-muted">
                      {expandedRoutes[route.routeId]
                        ? "Show Less Vehicles"
                        : `${route.vehicles.length - 3}+ more vehicles available`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-muted">No vehicles available for this route.</p>
          )}
        </div>
      ))}
    </>
  );
};

export default Route;
