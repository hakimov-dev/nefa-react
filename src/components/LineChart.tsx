import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const LineChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

  return (
    <div>
     <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

// import React from "react";

// const LineChart = () => {
//     return (
//         <h1>LineChart</h1>
//     )
// }

// export default LineChart
