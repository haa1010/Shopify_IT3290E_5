import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Date:this.props.date,
      total:this.props.total
    }
  }
  render() {
    const state = {
      labels: this.props.date,
      datasets: [
        {
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data:this.props.total
        }
      ]
    }
  

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


