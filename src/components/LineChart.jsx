import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          "0",
          "10000",
          "5000",
          "15000",
          "10000",
          "20000",
          "15000",
          "25000",
          "20000",
          "30000",
          "25000",
        ],
        backgroundColor: "grey",
        borderColor: "#4E73DF",
        pointBorderColor: "#4E73DF",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  return <Line data={data}></Line>;
};

export default LineChart;
