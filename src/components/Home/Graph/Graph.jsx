import React from "react";
import { Scatter } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Graph = () => {
  const xyValues = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 },
  ];

  const data = {
    datasets: [
      {
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues,
      },
    ],
  };

  const options = {
    legend: { display: false },
    scales: {
      xAxes: [{ ticks: { min: 40, max: 160 } }],
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  };

  return (
    <div style={{display: "unset"}}>
      <Scatter
        data={data}
        className="w-100"
        options={options}
        style={{ boxSizing: "border-box", width: "-webkit-fill-available !important",display:"block" }}
      />
    </div>
  );
};

export default Graph;
