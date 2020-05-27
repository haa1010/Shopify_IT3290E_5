import React, { Component } from 'react';
class OrderbyDay extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="container-fluid">
                  <div className="card mb-4">
                    <div className="card-header"><i className="fas fa-table mr-1" />Doanh Thu (Theo ngày)</div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable1" width="100%" cellSpacing={0}>
                          <thead>
                            <tr>
                              <th>Ngày</th>
                              <th>Tên Sản Phẩm</th>
                              <th>Số Lượng</th>
                              <th>Giá (VND)</th>
                              <th>Doanh thu (VND)</th>
                            
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Ngày</th>
                              <th>Tên Sản Phẩm</th>
                              <th>Số Lượng</th>
                              <th>Giá (VND)</th>
                              <th>Doanh Thu (VND)</th>
                            </tr>
                          </tfoot>
                          <tbody>
                          <tr>
                              <td>2019/04/25</td>
                              <td>Iphone 7S</td>
                              <td>2</td>
                              <td>600</td>
                              <td>1200</td>
                            </tr>
                            <tr>
                              <td>2019/04/25</td>
                              <td>Samsung Galaxy A71</td>
                              <td>3</td>
                              <td>480</td>
                              <td>1440</td>
                            </tr>
                            <tr>
                              <td>2019/07/14</td>
                              <td>Samsung Galaxy S10</td>
                              <td>5</td>
                              <td>1000</td>
                              <td>5000</td>
                            </tr>
                            <tr>
                              <td>2020/01/12</td>
                              <td>Xiaomi Redmi Note 8</td>
                              <td>12</td>
                              <td>230</td>
                              <td>2760</td>
                            </tr>
                            <tr>
                              <td>2020/03/29</td>
                              <td>Samsung Galaxy A21S</td>
                              <td>4</td>
                              <td>250</td>
                              <td>1000</td>
                            </tr>
                            <tr>
                              <td>2020/03/28</td>
                              <td>Samsung Galaxy Note 10 Lite</td>
                              <td>1</td>
                              <td>700</td>
                              <td>700</td>
                            </tr>
                            <tr>
                              <td>2020/01/15</td>
                              <td>Realme 6</td>
                              <td>4</td>
                              <td>300</td>
                              <td>1200</td>
                            </tr>
                            <tr>
                              <td>2019/08/06</td>
                              <td>Realme C3</td>
                              <td>5</td>
                              <td>130</td>
                              <td>650</td>
                            </tr>
                            <tr>
                              <td>2019/12/14</td>
                              <td>Xiaomi Redmi 8</td>
                              <td>6</td>
                              <td>140</td>
                              <td>840</td>
                            </tr>
                            <tr>
                              <td>2019/11/05</td>
                              <td>Oppo Reno 2F</td>
                              <td>3</td>
                              <td>300</td>
                              <td>900</td>
                            </tr>
                            <tr>
                              <td>2019/12/13</td>
                              <td>Iphone 11 Pro Max</td>
                              <td>1</td>
                              <td>1500</td>
                              <td>1500</td>
                            </tr>
                            <tr>
                              <td>2020/03/19</td>
                              <td>Iphone 11 Pro Max</td>
                              <td>3</td>
                              <td>1500</td>
                              <td>4500</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        );
    }
}
export default OrderbyDay;
