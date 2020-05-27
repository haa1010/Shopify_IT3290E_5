import React, { Component } from 'react';
class Storage extends Component {

  componentDidMount(){


  }
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
                        <th>Số Lượng đã bán</th>
                        <th>Số lượng trong kho</th>
                        <th>Giá (VND)</th>
                        
                      
                      </tr>
                    </thead>
                   
                    <tbody>
                      <tr>
                        <td>Iphone 7S</td>
                        <td>2</td>
                        <td>600</td>
                        <td>1200</td>
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
