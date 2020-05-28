import React, { Component } from 'react';
class Storage extends Component {
constructor(props){
  super(props)
  this.state={
    Stock:[],
    sold:[]
  }
}
  componentDidMount(){
    fetch('http://localhost:8080/admin')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          Stock: result.overTime.inStock


        });

       
      
      
       
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
         
          <div className="container-fluid">
            <div className="card mb-4">
              <div className="card-header">Hàng Hóa Trong Kho</div>
              <div className="card-body">
                <div className="table-responsive" style={{ maxHeight: '700px',
               overflowY: 'scroll'}}>
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
                   
                   {this.state.Stock.length!==0&& <tbody>
                      {this.state.Stock.map((index,key)=>(<tr key={key}>
                        <td>{index.nameproduct}</td>
                        <td>2</td>
                        <td>600</td>
                      <td>{index.InStock}</td>
                      <td>{formatter.format(120000)}</td>
                      </tr>))}
                    </tbody>}
                  </table>
                </div>
              </div>
            </div>
          </div>
    
        );
    }
}
export default Storage;
