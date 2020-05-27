import React from 'react';
import Order from '../admin/OrderbyDay'

import OldProduct from '../admin/oldProduct'
import Store from '../admin/Storage'

class Admin extends React.Component{
constructor(props){
    super(props)
    this.state={
        page:4
    }
    
    this.change=this.change.bind(this)

}

change(e){
this.setState({
    page:e
})
}
render(){
    return(
        <div>
        <div id="top-header">
        <div className="container">
            <ul className="header-links pull-left ml-5" style={{color:'white',marginLeft:'10%'}}>
                <li><i className="fa fa-phone"></i> +021-95-51-84</li>
                <li><i className="fa fa-envelope-o"></i> shopify@email.com</li>
                <li><i className="fa fa-map-marker"></i> Số 1 Đại Cồ Việt</li>
            </ul>

        </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:'#e8f4f8',height:'100vh'}} >
        <div className='container' style={{height:'100%'}}>
         

        <nav class="navbar navbar-expand-lg">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
        
        
            <ul class="navbar-nav d-flex justify-content-around" style={{fontSize:'18px'}}>
              <li className="nav-item mr-5" onClick={()=>{this.change(1)}}> Thống kê đơn hàng</li>
                        <li className="nav-item  justify-content-around mr-5" onClick={()=>{this.change(2)}} > Thống kê sản phẩm</li>
                        <li className="nav-item  justify-content-around mr-5" onClick={()=>{this.change(3)}}> Thêm sản phẩm mới</li>
                        <li className="nav-item  justify-content-around mr-5" onClick={()=>{this.change(4)}}> Thêm sản phẩm cũ</li>

                   
            </ul>
          </div>
        </nav>
      
        {this.state.page===1&&<Order/>}
        {this.state.page===2&&<Store/>}
       {this.state.page===3&&<newProduct/>}
        {this.state.page===4&&<OldProduct/>}
        
              </div>
              </div>
              </div> 
    )
}


}
export default Admin;