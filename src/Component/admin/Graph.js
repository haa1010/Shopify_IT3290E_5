import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['10/05/2020', '11/05/2020', '12/05/2020',
           '13/05/2020', '14/05/2020', '15/05/2020', '16/05/2020'],
  datasets: [
    {
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Biểu Đồ Doanh Thu Theo Ngày',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}


// class Graph extends Component {
//   constructor(props) {
//     super(props);
//     this.chartReference = React.createRef();
//   }
 
//   componentDidMount() {
//     console.log(this.chartReference); // returns a Chart.js instance reference
//   }
 
//   render() {
//     return (<Bar ref={this.chartReference} data={data} options={options} />)
//   }
// }
