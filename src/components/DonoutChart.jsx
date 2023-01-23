import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonoutChart = () => {
  const data = {
    labels: ["Direct", "Social", "Refferal"],
    datasets: [
      {
        label: "Revenue",
        data: ["55", "30", "15"],
        backgroundColor: ["#4E73DF", "#1CC88A", "#36B9CC"],
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data}></Doughnut>
    </div>
  );
};

export default DonoutChart;
