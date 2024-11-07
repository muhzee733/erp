import React from 'react'
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";
import {seriesData } from '../Charts/ApexCharts/series';
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  
  const BasicAreaCharts = ({dataColors}) => {
    var BasicAreaChartsColors = getChartColorsArray(dataColors);
    const series = [{
        name: "STOCK ABC",
        data: seriesData.monthDataSeries1.prices
    }];
    var options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },

        title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },
        subtitle: {
            text: 'Price Movements',
            align: 'left'
        },
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        },
        colors: BasicAreaChartsColors
    };

    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="area"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
  }
  return (
    <BasicAreaCharts dataColors='["--vz-success"]' />
  )
}

export default BarChart