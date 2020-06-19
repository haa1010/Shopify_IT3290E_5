import React, { Component } from 'react';
import axios from "axios"

import Cookies from 'universal-cookie';
import {Link } from 'react-router-dom'
const cookies = new Cookies();
function capitalizeFirstLetter(string) {
    string=string[0].toUpperCase() +  
    string.slice(1);
    return string;
}
class OldProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errId: { border: "0.5px solid #E4E7ED" },
            errColor: { border: "0.5px solid #E4E7ED" },
            errQty: { boder: "0.5px solid #E4E7ED" },
            ErrID: '',
            ErrColor: '',
            ErrQty: '',
            Id: 0,
            Color: 0,
            Qty: 0,
            Product: []

        }
        this.handleColor = this.handleColor.bind(this);
        this.handleId = this.handleId.bind(this);
        this.handleQty = this.handleQty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout=this.logout.bind(this);

    }
    logout(){
        cookies.remove('login');
        window.location.href = '/'; 
    }
    
    handleId() {
        if (this.refs.id === null || this.refs.id === undefined || this.refs.id === '') {
            this.setState({
                errId: { boder: '1px solid red' },
                Id: 0,
                ErrID: "Vui lòng nhập id"
            })
        }
        else
            this.setState({
                errId: { boder: '0.5px solid #E4E7ED' },
                Id: 1,
                ErrID: ''
            })

    }


    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.Id === 1 && this.state.Qty === 1 && this.state.Color === 1) {
            var flat = 0;
           
            for (var i = 0; i < this.state.Product.length; i++) {
                if (!this.state.Product[i].localeCompare(this.refs.id.value)) {
                    flat = 1;
                    break;
                }
            }
            if (flat === 1) {
                
                var order = {
                    id: this.refs.id.value,
                    color: capitalizeFirstLetter(this.refs.color.value),
                    quantity: this.refs.qty.value

                }       

               let result= await axios.put('http://localhost:8080/admin/update', order
                )
                    .then(function (response) {
                        console.log(order)
                        alert("thêm thành công")

                    })
                    .catch(function (error) {
                        console.log(error);
                        // alert('xảy ra lỗi vui lòng thử lại')
                    });




            }
        }
        else alert("chưa điền đủ thông tin hoặc id không tồn tại")


    }


    handleQty() {
        if (this.refs.qty === null || this.refs.qty === undefined || this.refs.qty === 0) {
            this.setState({
                errQty: { boder: '1px solid red' },
                Qty: 0,
                ErrQty: "Vui lòng nhập so luong"
            })
        }
        else
            this.setState({
                errQty: { boder: '0.5px solid #E4E7ED' },
                Qty: 1,
                ErrQty: ''
            })

    }

    handleColor() {

        if (this.refs.color === null || this.refs.color === undefined || this.refs.color === '') {
            this.setState({
                errColor: { boder: '1px solid red' },
                Color: 0,
                ErrColor: "Vui lòng nhập màu"
            })
        }
        else this.setState({
            errColor: { boder: '0.5px solid #E4E7ED' },
            Color: 1,
            ErrColor: ''
        })

    }


    componentDidMount() {

        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(
                (result) => {
                    var id = []
                    for (var i = 0; i < result.detail.length; i++) {
                        id.push(result.detail[i].idproduct)
                    }

                    this.setState({
                        isLoaded: true,
                        Product: id


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
            <div className='container d-flex justify-content-center align-items-center flex-column'  >
<div>
                <h4 className=" mt-5" style={{ fontSize: '30px' }}>Điền thông tin sản phẩm </h4>
                </div>
                <div className='justify-conten-center d-flex align-item-center'>
                <form style={{ fontSize: '20px',display:'block' }}>


                    <div className="form-group" >
                        <label>ID sản phẩm</label>
                        <input className="form-control" type="text" name="product_id" ref='id' onChange={this.handleId} style={this.state.errId} />
                        <p style={{ color: 'red' }}>{this.state.ErrID}</p>
                    </div>
                    <div className="form-group">

                        <label >Màu</label>
                        <input type='text' ref='color' className="form-control" onChange={this.handleColor} />
                        <p style={{ color: 'red' }}>{this.state.ErrColor}</p>

                    </div>
                    <div className="form-group">

                        <label >Số lượng</label>
                        <input className="form-control" type="number" ref='qty' onChange={this.handleQty} name="quantity" min='1' style={this.state.errQty} />
                        <p style={{ color: 'red' }}>{this.state.ErrQty}</p>
                    </div>
                                                   
                               <div className='justify-content-center d-flex align-item-center'>               
                    <button type="submit" class="btn btn-primary"  onClick={this.handleSubmit} style={{fontSize: '18px' }} >Xác nhận </button>
                    </div>
                  

                </form>
                </div>
            </div>

</div>
</div>
</div>
        );
    }
}

export default OldProduct;