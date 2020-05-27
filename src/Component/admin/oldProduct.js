import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/react';

class OldProduct extends Component {
    render() {
        return (
            <div className='container 'style={{marginLeft:'25%'}} >
                
        <h4 className=" mt-5 mb-3" style={{fontSize:'30px'}}>Điền thông tin sản phẩm </h4>
    
        <form  style={{fontSize:'20px'}}>
         
           
              <div className="form-group" >
                <label>ID sản phẩm</label>
                <input className="form-control" type="text" name="product_id"  style={{width:'300px',height:'30px',fontSize:'16px'}}/>
                </div>
                <div className="form-group">
                
                  <label >Màu</label>
                  <input className="form-control" type="text" style={{width:'300px',height:'30px',fontSize:'16px'}}/>
                
              </div>
              <div className="form-group">
                
                  <label >số lượng</label>
                  <input className="form-control" type="number" name="quantity" min='1' style={{width:'300px',height:'30px',fontSize:'16px'}}/>
                
              </div>
              
                  <button className="btn btn-primary" style={{width:'100px', height:'40px', fontSize:'18px'}} type="submit">Xác nhân</button>
              
            
            
        </form>
      
</div>

           
        );
    }
}

export default OldProduct;