import React, { Component } from 'react';
class Storage extends Component {
    render() {
        return (
          <div>
          <div className="container-fluid">
            <div className="card mb-4">
              <div className="card-header"><i className="fas fa-table mr-1" />Hàng Hóa Trong Kho</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable2" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>ID</th>
                        <th>Số Lượng</th>
                        <th>Giá (VND)</th>
                        
                      
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Tên Sản Phẩm </th>
                        <th>ID</th>
                        <th>Số Lượng </th>
                        <th>Giá (VND)</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Iphone 7S</td>
                        <td>2</td>
                        <td>600</td>
                        <td>1200</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy A71</td>
                        <td>3</td>
                        <td>480</td>
                        <td>1440</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy S10</td>
                        <td>5</td>
                        <td>1000</td>
                        <td>5000</td>
                      </tr>
                      <tr>
                        <td>Xiaomi Redmi Note 8</td>
                        <td>12</td>
                        <td>230</td>
                        <td>2760</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy A21S</td>
                        <td>4</td>
                        <td>250</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <td>Samsung Galaxy Note 10 Lite</td>
                        <td>1</td>
                        <td>700</td>
                        <td>700</td>
                      </tr>
                      <tr>
                        <td>Realme 6</td>
                        <td>300</td>
                        <td>4</td>
                        <td>1200</td>
                      </tr>
                      <tr>
                        <td>Realme C3</td>
                        <td>130</td>
                        <td>5</td>
                        <td>650</td>
                      </tr>
                      <tr>
                        <td>Xiaomi Redmi 8</td>
                        <td>140</td>
                        <td>6</td>
                        <td>840</td>
                      </tr>
                      <tr>
                        <td>Oppo Reno 2F</td>
                        <td>300</td>
                        <td>3</td>
                        <td>900</td>
                      </tr>
                      <tr>
                        <td>Iphone 11 Pro Max</td>
                        <td>1500</td>
                        <td>1</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>Iphone 11 Pro Max</td>
                        <td>1500</td>
                        <td>3</td>
                        <td>4500</td>
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
export default Storage;
