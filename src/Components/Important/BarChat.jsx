import React from "react";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";
import ReactApexChart from "react-apexcharts";
import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";

const BarChart = ({ Series, title, color }) => {
  const BasicAreaCharts = ({ dataColors }) => {
    const areachartSplineColors = getChartColorsArray(dataColors);
    return (
      <React.Fragment>
        <ReactApexChart
          dir="ltr"
          options={{
            ...Series?.options,
            colors: areachartSplineColors,
          }}
          series={Series?.series}
          type="area"
          height="350"
          className="apex-charts"
        />
      </React.Fragment>
    );
  };
  return (
    <Card>
      <CardHeader>
        <h4 className="card-title mb-0">{title}</h4>
      </CardHeader>
      <CardBody>
        <BasicAreaCharts dataColors={color} />
      </CardBody>
    </Card>
  );
};

export default BarChart;
