import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import *  as moment from 'moment';
const cookies = new Cookies();
class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            DetailOrder: [],
            receiver: '',
            divhone: '',
            address: '',
            day: '',
            totalcost: '',
            idOrder: '',
            isFound:null

        }
        this.searchId = this.searchId.bind(this);
        this.logout = this.logout.bind(this);


    }
    logout() {
        cookies.remove('login');
        window.location.href = '/';
    }
    searchId = async e => {
    
        var id = parseInt(this.refs.idOrder.value);
        console.log(this.state.order)
   
                window.location.href = '/dashboard/search/' + id;

            

        

    }
    componentDidMount() {
        const { match, history } = this.props;
        console.log(match.params.search);

        fetch('http://localhost:8080/admin')
            .then(res => res.json())
            .then(
                (result) => {

                    var order = []
                    for (var i = 0; i < result.overTime.allOrder.length; i++) {
                        var id = result.overTime.allOrder[i].idorder
                        order.push(id);
                    }
                    this.setState({

                        order: order
                    });
                    console.log(result)
                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                       
                    });
                    alert("Đã xảy ra lỗi, vui lòng thử lại sau 1")
                }
            )

        fetch('http://localhost:8080/admin/orders/' + match.params.search)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result!==null){
                    this.setState({
                        isLoaded: true,
                        DetailOrder: result,
                        receiver: result[0].receiver,
                        phone: result[0].phone,
                        address: result[0].address,
                        day:  moment(result[0].day).format('DD/MM/YYYY'),
                        totalcost: result[0].totalcost,
                        idOrder: result[0].idorder,
isFound:true
                    });
                    console.log(result)
                }
                else this.setState({
                    isFound: false
                })
                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                        
                    });
                    alert("Đã xảy ra lỗi, vui lòng thử lại sau 2")
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
                <div id="top-header" style={{ height: '50px' }}>
                    <div className="container">
                        <ul className="header-links pull-left ml-5" style={{ color: 'white', marginLeft: '10%' }}>
                            <li><i className="fa fa-phone"></i> +021-95-51-84</li>
                            <li><i className="fa fa-envelope-o"></i> shodivify@email.com</li>
                            <li><i className="fa fa-map-marker"></i> Số 1 Đại Cồ Việt</li>
                            <li className="pull-right" onClick={this.logout}>  Đăng xuất</li>
                        </ul>

                    </div>
                </div>

                <div className="container-fluid" style={{ backgroundColor: '#e8f4f8' }} >
                    <div className='container' style={{ minHeight: '100vh' }}>


                        <nav class="navbar navbar-expand-lg pt-4 pb-5">

                            <button class="navbar-toggler" tydive="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">


                                <ul class="navbar-nav d-flex justify-content-around" style={{ fontSize: '20px' }}>
                                    <li className="nav-item mr-5" > <Link to='/dashboard'>Thống kê đơn hàng</Link></li>
                                    <li className="nav-item  justify-content-around mr-5"  ><Link to='/dashboard/store'> Thống kê sản phẩm </Link></li>
                                    <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addNew'>Thêm sản phẩm mới</Link></li>
                                    <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addOld'>Thêm sản phẩm cũ</Link></li>


                                </ul>
                            </div>
                        </nav>







                        <div className="container" >

                            <h5>Xem chi tiết đơn hàng <input tydive='text' ref='idOrder' onBlur={this.searchId} /></h5>

                           {this.state.isFound&& <div className="mt-5" style={{width:'50vw'}}>
                               
                                <div className='row pb-2 mb-2' style={{borderBottom:'0.5px solid #BDBDBD',width:'20vw'}}><div className='col-lg-5'> <span>Ngày:</span></div>< div className='col-lg-5 offset-1'>{this.state.day}</div></div>
                                <div className='row pb-2 mb-2' style={{borderBottom:'0.5px solid #BDBDBD',width:'20vw'}}> <div className='col-lg-5' > <span>Người nhận</span>:</div> <div  className='col-lg-5 offset-1' >{this.state.receiver}</div></div>
                                <div className='row pb-2 mb-2' style={{borderBottom:'0.5px solid #BDBDBD',width:'20vw'}}> <div className='col-lg-5'> <span>Sdt</span>: </div><div className='col-lg-5 offset-1'>{this.state.phone}</div></div>
                                <div className='row pb-2 mb-2' style={{borderBottom:'0.5px solid #BDBDBD',width:'20vw'}}> <div className='col-lg-5'><span>Địa chỉ</span>: </div><div className='col-lg-5 offset-1'>{this.state.address}</div></div>

                                <div className='row pb-2 mb-2' style={{borderBottom:'0.5px solid #BDBDBD',width:'20vw'}}>   <div  className='col-lg-5'> <b>Tổng tiền</b>: </div><div className='col-lg-5 offset-1'> {formatter.format(this.state.totalcost*1000)}</div>
                            </div>
                            <h5 className='mt-5'>Chi tiết</h5>
                            <div className='row mt-2 '>
                                <div className='col-lg-1'><b>STT</b> </div>
                                <div className=' col-lg-1'>
                                    <b>ID</b> 
                                    </div>
                                <div className='col-lg-5'>
                                  <b>  Tên sản phẩm</b>
                                    </div>
                                <div className='col-lg-2'>
                                   <b> Màu</b>
                                    </div>
                                <div className=' col-lg-3'>
                                   <b> Số lượng</b>
                                    </div>
                            </div>

                            {this.state.DetailOrder.map((items, index) => (
                                <div className='row align-center mt-3' key={index}>
                                     <div className='col-lg-1'> {index+1}</div>
                                    <div className='col-lg-1'>
                                        {items.idproduct}
                                    </div>
                                    <div className='col-lg-5'>
                                        {items.nameproduct}
                                    </div>
                                    <div className='col-lg-2'>
                                        {items.color}
                                    </div>
                                    <div className='col-lg-3'>
                                        {items.quantity}
                                    </div>
                                </div>


                            ))}

                        </div>
    }
    {!this.state.isFound&& 
    
    <p> Không có đơn hàng phù hợp
    </p>
    
    }
                    </div>
                            
                </div>
            </div>
</div>

    )
    }


}

export default Search;