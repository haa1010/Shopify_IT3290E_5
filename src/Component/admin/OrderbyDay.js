import React, { Component } from 'react';
class OrderbyDay extends Component {

componentDidMount(){


}

    render() {
        return (
            <div>
                
                <div className="container">

                    <h5>Xem chi tiết đơn hàng <input type='text' onChange={this.searchId}/></h5>
<h3>Tổng quan đơn hàng</h3>
                  <div className="card mb-4">
                    <div className="card-header">Doanh thu theo đơn hàng </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable1" width="100%" cellSpacing={0}>
                          <thead>
                            <tr>
                              <th>Ngày</th>
                              <th>ID đơn hàng</th>
                             
                              <th>Tổng hóa đơn</th>
                              
                            
                            </tr>
                          </thead>
                          
                          <tbody>
                          <tr>
                              <td>2019/04/25</td>
                              <td>1120</td>
                              <td>20tr</td>
                             
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
        );
    }
}
export default OrderbyDay;
