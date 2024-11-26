import React from "react";
import { Card, CardHeader } from "reactstrap";
import { ReactComponent as BtnIcon } from "../../assets/images/svg/AddCircle.svg";

const MapRouting = () => {
  return (
    <div className="page-content">
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between ">
            <p className="route-planning">Route Planning</p>
            <button className="new-route-btn">
              <BtnIcon style={{marginRight:"5px"}} />
              New Route
            </button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MapRouting;
