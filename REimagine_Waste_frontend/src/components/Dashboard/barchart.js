import React from 'react';
import { Bar } from "react-chartjs-2";

function barchart({ chart_data }) {
  return (
    <div>
      <Bar
        data={chart_data}
        options={{
          animation: {
            delay: 500,
            duration: 2000,
          },
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            y: {
              display: true,
              max: 100,
              stepSize: 50,
            },
          },
        }}
      />
    </div>
  );
}

export default barchart;
