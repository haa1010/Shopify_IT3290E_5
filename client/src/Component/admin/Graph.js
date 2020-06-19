import React, { Component } from 'react';



import CanvasJSReact from '../canvasjs-2.3.2/canvasjs.react' ;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graph extends Component {
	constructor(props){
    super(props)
  }
    render() {
      const options = {
        title: {
          text: "Thống kê doanh thu theo ngày"
        },
        data: [{				
                  type: "column",
                  dataPoints: this.props.data
         }]
     }
      
     return (
        <div style={{marginBottom:'5%', marginTop:'5%'}}>
          <CanvasJSChart options = {options}
               onRef = {ref => this.chart = ref} 
          />
        </div>
      );
    }
  }
export default Graph;