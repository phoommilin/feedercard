import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: '',
        data: [20, 21, 22, 23, 22, 21, 22, 23],
        fill: true,
        backgroundColor: 'rgba(1,232,189, 0.1)',
        borderColor: 'rgba(1,232,189, 1)',
        borderWidth: 1,
      },
    ],
  };
const options = {
    scales: {
        y: {
            display: false,
            ticks: {
            beginAtZero: true,
            },
            grid: {
                display: false,
            },
            suggestedMin: 10,
        },
        x: {
            display: false,
            ticks: {
                beginAtZero: true,
            },
            grid: {
                display: false,
            }
        },          
    },
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    tension: '0.2',
    plugins: {
        legend: {
            display: false
        },
        
    },
    maintainAspectRatio: false,
};

const Chartjs = () => {

    return (
        <div className="absolute z-3 -bottom-14 -left-2">
            <Line data={data} options={options} height={125} width={350}/>
        </div>
    )
}

export default Chartjs