import { Bar,Doughnut,Line,Scatter,Radar,PolarArea, Pie } from "react-chartjs-2";
import React from 'react';
import '../App.css';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Average Gun Violence',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

export default class Dashboard extends React.Component {
  render() {
    return (
      <div class='container'>
      <div class='size'>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <div class='size'>
        <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </div>
    );
  }
}

