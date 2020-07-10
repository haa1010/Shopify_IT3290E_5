import React, { Component } from 'react';
import Moment from 'react-moment'
import './admin.css'
import Chart from './Graph'
import *  as moment from 'moment'

import Cookies from 'universal-cookie';
import {Link } from 'react-router-dom'
const cookies = new Cookies();


class OrderbyDay extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      order: [],
      Date: [],
      total: [],
      inCome: [],
      isPage: 1,
      data:[]
    }
    this.searchId = this.searchId.bind(this);
    this.logout=this.logout.bind(this);

  }

  logout(){
    cookies.remove('login');
    window.location.href = '/'; 
}

  componentDidMount() {
   
    fetch('http://localhost:8080/admin')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            order: result.overTime.allOrder,
            inCome: result.overTime.inCome[0],
           


          });
console.log(result.inComeByDate)
         var data=[]
          for (var i = 0; i < result.inComeByDate.length; i++) {
            var order = moment(result.inComeByDate[i].day).format('DD/MM/YYYY')
            var x = parseInt(result.inComeByDate[i].sum*1000);
           
          data.push({label: order,  y: x  });
          

          }
          this.setState({
            data:data
          })
console.log(this.state.data);
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
  searchId = async e => {
    e.preventDefault();
    var id = parseInt(this.refs.idOrder.value);

    for (var i = 0; i < this.state.order.length; i++) {
      var order = this.state.order[i];
      console.log(order.idorder === id)
      if (order.idorder === id) {
        window.location.href = '/dashboard/search/'+id;

      }

    }

  }
  render() {
   
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',

    })
    return (

<div>

<div id="top-header">
        <div className="container">
            <ul className="header-links pull-left ml-5" style={{color:'white',marginLeft:'10%'}}>
                <li><i className="fa fa-phone"></i> +021-95-51-84</li>
                <li><i className="fa fa-envelope-o"></i> shopify@email.com</li>
                <li><i className="fa fa-map-marker"></i> Số 1 Đại Cồ Việt</li>
                <li className="pull-right" onClick={this.logout}>  Đăng xuất</li>
            </ul>

        </div>
    </div>
 
    <div className="container-fluid" style={{backgroundColor:'#e8f4f8'}} >
        <div className='container' style={{minHeight:'100vh'}}>
         

        <nav class="navbar navbar-expand-lg">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
        
        
          <ul class="navbar-nav d-flex justify-content-around pt-4 pb-5" style={{fontSize:'20px'}}>
              <li className="nav-item mr-5" > <Link to='/dashboard'>Thống kê đơn hàng</Link></li>
                        <li className="nav-item  justify-content-around mr-5"  ><Link to='/dashboard/store'> Thống kê sản phẩm </Link></li>
                        <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addNew'>Thêm sản phẩm mới</Link></li>
                        <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addOld'>Thêm sản phẩm cũ</Link></li>

                   
            </ul>
          </div>
        </nav>
       
       
        
             

              
              
      <div className="container" >

        <h4 >Xem chi tiết đơn hàng <input type='text' ref='idOrder' onBlur={this.searchId} /></h4>
       
         
            <div className="row">
              <h3 className="col-lg-3 ">Tổng quan đơn hàng</h3>
              {this.state.inCome.length !== 0 && <h3 className="offset-3 col-lg-5" style={{ float: 'right' }}>Doanh thu trong tháng {this.state.inCome.month}: {formatter.format(this.state.inCome.total * 1000)}</h3>
              }</div>

            <div className="card mb-4">
              <div className="card-header">Doanh thu theo đơn hàng </div>
              <div className="card-body">
                <div className="table-responsive" style={{
                  maxHeight: '700px',
                  overflowY: 'scroll'
                }}>
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
                          <td>{formatter.format(index.totalcost * 1000)}</td>

                        </tr>

                      ))}


                    </tbody>
                  </table>
                  }
                </div>

              </div>

            </div>

            <Chart data={this.state.data} />
         
     
          
       </div>
       </div>
        </div>
        </div>
      
    );
  }
}
export default OrderbyDay;
