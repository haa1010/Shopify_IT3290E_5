import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link } from 'react-router-dom'
const cookies = new Cookies();
class Storage extends Component {
constructor(props){
  super(props)
  this.state={
    Stock:[],
    Sold:[]
  }
  this.logout=this.logout.bind(this);
}
logout(){
  cookies.remove('login');
  window.location.href = '/'; 
}

  componentDidMount(){
    fetch('http://localhost:8080/admin')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          Stock: result.overTime.statistic,
        

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
         <div>

<div id="top-header" style={{height:'50px'}}>
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
       
       
        
       
          <div className="container-fluid">
            <div className="card mb-4">
              <div className="card-header" style={{fontSize:'20px'}}>Hàng Hóa Trong Kho</div>
              <div className="card-body">
                <div className="table-responsive" style={{ maxHeight: '800px',
               overflowY: 'scroll'}}>
                  <table className="table table-bordered" id="dataTable2" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>ID</th>
                        <th>Màu</th>
                        <th>Số Lượng đã bán</th>
                        <th>Số lượng trong kho</th>
                     
                        
                      
                      </tr>
                    </thead>
                   
                   {this.state.Stock.length!==0&& <tbody>
                      {this.state.Stock.map((index,key)=>(<tr key={key}>
                        <td>{index.nameproduct}</td>
                      <td>{index.idproduct}</td>
                      <td>{index.color}</td>
                      <td>{index.sold===null?0:index.sold}</td>
                      <td>{index.instock}</td>
           
                      </tr>))}
                    </tbody>}
                  </table>
                </div>
              </div>
            </div>
          </div>


          </div>
</div>

          </div>
        );
    }
}
export default Storage;
