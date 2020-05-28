import React, { Component } from 'react';
import Moment from 'react-moment'
import './admin.css'
import Chart from './Graph'
import *  as moment from 'moment'
class OrderbyDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: [],
      Date:[],
      total:[],
      inCome:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/admin')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            order: result.overTime.allOrder,
            inCome:result.overTime.inCome[0]


          });
       
var Date=[];
var total=[];
          for(var i=0;i<result.overTime.allOrder.length;i++){
            var order=moment(result.overTime.allOrder[i].day).format('DD/MM/YYYY')
            var x=result.overTime.allOrder[i].totalcost;
            for(var j=i+1;j<result.overTime.allOrder.length;j++){
            var order2=moment(result.overTime.allOrder[j].day).format('DD/MM/YYYY');
         
        
            if(!order.localeCompare(order2)){
            
                x+=result.overTime.allOrder[j].totalcost
            }
            else{ i=j;
               break;
            }
           
          }
         
          Date.push(order);
          total.push(x);
        
        }
        
          this.setState({
            Date:Date,
            total:total
          })

        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log("error");
        }
      )
  }

  render() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
    
    })
    return (
     

        <div className="container" >

          <h5>Xem chi tiết đơn hàng <input type='text' onChange={this.searchId} /></h5>
          <div className="row">
          <h3 className="col-lg-3 ">Tổng quan đơn hàng</h3>
   {this.state.inCome.length!==0&& <h3  className="offset-3 col-lg-5" style={{float:'right'}}>Doanh thu trong tháng {this.state.inCome.month}: {formatter.format(this.state.inCome.total*1000)}</h3>
  }</div>
         
          <div className="card mb-4">
            <div className="card-header">Doanh thu theo đơn hàng </div>
            <div className="card-body">
              <div className="table-responsive" style={{ maxHeight: '700px',
               overflowY: 'scroll'}}>
                {this.state.order.length !== 0 && <table className="table table-bordered" id="dataTable1" width="100%" cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>ID đơn hàng</th>
                        <th>Người mua</th>
                      <th>Tổng hóa đơn</th>


                    </tr>
                  </thead>

                  <tbody >
                    {this.state.order.map((index, key) => (
                      <tr key={key}>
                        <td> <Moment format="DD/MM/YYYY ">{index.day}</Moment></td>
                        <td>{index.idorder}</td>
                    <td>{index.receiver}</td>
                        <td>{formatter.format(index.totalcost*1000)}</td>

                      </tr>

                    ))}


                  </tbody>
                </table>
                }
              </div>
            
            </div>
           
          </div>

          <Chart date={this.state.Date} total={this.state.total}/>
         
        </div>

      
    );
  }
}
export default OrderbyDay;
