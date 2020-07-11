import React from 'react'
import Header from '../Header/header'
import Footer from '../footer/footer'
import Cookies from 'universal-cookie';
import *  as moment from 'moment'
const cookies = new Cookies();

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curPage: 0,
            product: {},
            url: [],
            Qty: [],
            total: null,
            option: 0,
            qty: null,
            Soluong: null,
            errFormColor: '',
            errFormQty: '',
            color: null,
            Cart: []

        }
        this.changePage = this.changePage.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleQty = this.handleQty.bind(this);
    }
    handleQty() {
        var quanty = parseInt(this.refs.soluong.value);

        if (quanty > this.state.qty) {

            this.setState({
                Soluong: null,
                errFormQty: 'Vượt quá số lượng hàng trong kho'
            })
        }
        else
            if (this.state.color === null) {
                this.setState({
                    Soluong: null,
                    errFormQty: 'hết hàng'
                })
            }
            else if (quanty === 0) {
                this.setState({
                    Soluong: null,
                    errFormQty: 'vui lòng chọn số lượng >=1'
                })
            }
            else

                this.setState({
                    Soluong: quanty,
                    errFormQty: ''
                })


    }
    handleColor=(event)=> {
let value=null;
value=event.target.value;

        
        var i=0;
      for( i=0;i<this.state.Qty.length;i++){
          if(this.state.Qty[i].color.localeCompare(value)==0){
           
            break;
          }
      } 
         if (this.state.Qty[i].quantity == 0) {this.setState({
            errFormColor: 'Hết hàng',
            color: value,
            qty: 0

        })}
        else

            this.setState({
                color: value,
                qty: this.state.Qty[i].quantity,
                errFormColor:''
            })
           

    }
    handleOrder = async e => {
        e.preventDefault();
        var json_str = cookies.get('T');
console.log(json_str)
      
        if (this.state.color !== null && this.state.Soluong !== null) {
            if (json_str === 'undefined' || json_str === undefined||json_str.length===0) {
                json_str = [];
                var order = {
                    IdProduct: this.state.product.idproduct,
                    name: this.state.product.nameproduct,
                    url: this.state.url[0],
                    color: this.state.color,
                    quantity: this.state.Soluong,
                    price: this.state.product.price

                }
                json_str.push(order);

                cookies.set('T', json_str, { path: '/', expires: 0 });
                window.location.reload();
                console.log(json_str)
            }

            else {
                var flat = 0;
                if (json_str.length !== 0) {
                    console.log('111')
                    for (var i = 0; i < json_str.length; i++) {
                        var item = json_str[i];

                        if (item.IdProduct === this.state.product.idproduct && item.color === this.state.color) {

                            item.quantity = parseInt(this.state.Soluong) + parseInt(item.quantity);

                            flat = 1;
                            break;
                        }
                    }
                    if (flat === 1) { cookies.set('T', json_str, { path: '/', expires: 0 });   window.location.reload(); }
                   
                    if (flat === 0) {
                        console.log('okii');
                        order = {
                            IdProduct: this.state.product.idproduct,
                            name: this.state.product.nameproduct,
                            url: this.state.url[0],
                            color: this.state.color,
                            quantity: this.state.Soluong,
                            price: this.state.product.price

                        }
                        json_str.push(order);

                        cookies.set('T', json_str, { path: '/', expires: 0 });
                        window.location.reload();

                    }

                }
            }}



                else {
                this.setState({
                    errFormQty: 'bạn chưa chọn so luong'
                })




            }
            var total = 0;
            json_str = cookies.get('T');
            if (json_str !== undefined) {
                for (var i = 0; i < json_str.length; i++) {

                    total += parseInt(json_str[i].price) * parseInt(json_str[i].quantity);
                }
            }
            this.setState({
                Cart: json_str !== undefined ? json_str : null,
                total: total * 1000
            })

            console.log(cookies.get('T'));
        }
        changePage(val) {

            let value = val;
            if (value === 0) this.setState({ curPage: 0 });
            if (value === 1) this.setState({ curPage: 1 });
            if (value === 2) this.setState({ curPage: 2 });
        }
        changeImage(e) {

            this.setState({
                currentImage: e
            })
            console.log(e);
        }
        componentDidMount() {
            const { match, history } = this.props;
            console.log(match.params.id)
            //fetch id =match.params.id
            fetch('http://localhost:8080/products/' + match.params.id)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            product: result.detail,
                            url: result.url,
                            Qty: result.qty,
                            currentImage: result.url[0],
                            specification: result.specifications,
                            color: result.qty[0].color,
                            qty: result.qty[0].quantity

                        });

if(this.state.qty===0) this.setState({
    errFormColor:'Hết hàngs'
})

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

            var total = 0;
            var json_str = cookies.get('T');
            if (json_str !== undefined) {
                for (var i = 0; i < json_str.length; i++) {

                    total += parseInt(json_str[i].price) * parseInt(json_str[i].quantity);
                }
            }
            this.setState({
                Cart: json_str !== undefined ? json_str : null,
                total: total * 1000
            })

        }

        render() {
            const { match, history } = this.props;
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',

            })



            return (
                <div>

                    <Header />



                    <div className="section">

                        <div className="container">

                            <div className="row">

                                <div className="col-md-2 col-lg-2 col-md-push-2">
                                    <div id="product-main-img">
                                 {this.state.url.map((index, key) => (
                                            <div key={key} className="product-preview">
                                                <img src={index} alt="" height='120px' onClick={() => (this.changeImage(index))} />
                                            </div>
                                        ))}

                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-5 col-md-pull-5">
                                    <div id="product-imgs">

                                        <div className="product-preview">
                                            <img src={this.state.currentImage} alt="" />
                                        </div>


                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-5">
                                    <div className="product-details">
                                        <h2 className="product-name">{this.state.product.nameproduct}</h2>
                                        <div>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <span className="review-link hover"  onClick={() => (this.changePage(3))}>3 nhận xét</span>
                                        </div>
                                        <div>
                                            <h3 className="product-price"> {formatter.format(this.state.product.price * 1000)}  </h3>

                                        </div>
                                        <p></p>
                                        <form onSubmit={this.handleOrder} className='d-flex flex-column'>
                                            <div className="product-options  ">

                                                
                                                    Màu
									<select className="input-select ml-5" id="color " style={{width:'100px'}} value={this.state.color} onChange={this.handleColor}>
                                                        {this.state.Qty.map((index, key) => (
                                                            <option  key={key} value={index.color} >{index.color}</option>
                                                        ))}

                                                    </select>
                                                
                                                <span style={{ color: 'red',fontSize:'22px',fontWeight:'bold', marginLeft: '10px' }}>{this.state.errFormColor}</span>
                                            </div>

                                            <div className= "add-to-cart ">

                                                <div className="qty-label">
                                                    Số lượng
									<div className="input-number ml-4">
                                                        <input type="number" min='1' ref='soluong' max={this.state.qty} pattern='[0-9]' onInput={this.handleQty} />

                                                    </div>
                                                    <span style={{ color: 'red', marginLeft: '5px' }} id='noti'>{this.state.errFormQty}</span>
                                                </div>
                                               <br/>
                                               <br/>
                                                <button className= {this.state.errFormQty!==''||this.state.qty==0?"cant add-to-cart-btn":"add-to-cart-btn"} disabled={this.state.errFormQty!=='' ? true:false}><i className="fa fa-shopping-cart"></i> Thêm vào giỏ</button>



                                            </div>

                                        </form>

                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div id="product-tab">

                                        <ul className="tab-nav" style={{fontSize:'18px'}}>
                                            <li className=" active"><span className=" hover"data-toggle="tab" onClick={() => (this.changePage(0))}>Mô tả</span></li>
                                            <li><span data-toggle="tab" className='hover' onClick={() => (this.changePage(1))}>Chi tiết</span></li>
                                            <li><span data-toggle="tab" className='hover'onClick={() => (this.changePage(2))}>Nhận xét (3)</span></li>
                                        </ul>

                                        <div className="tab-content">
                                            {this.state.curPage === 0 &&
                                                <div className="tab-pane fade-in active">
                                                    <div className="row">
                                                        <div className="col-md-12"style={{fontSize:'15px'}}>
                                                            <p>{this.state.product.describepr}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {this.state.curPage === 1 &&
                                                <div className="tab-pane fade-in active">
                                                    <div className="tab-content" >
                                                        <div className="tab-pane active" id="home">
                                                            <h4>Thông tin sản phầm</h4>
                                                            <table className="table table-bordered" style={{fontSize:'15px'}}> 
                                                                <tbody>
                                                                    <tr className="techSpecRow"><th colspan="2">Chi tiết sản phẩm</th></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Hãng </td><td className="techSpecTD2">{this.state.product.brand}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Bộ nhớ</td><td className="techSpecTD2">{this.state.specification.memory}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Camera trước</td><td className="techSpecTD2"> {this.state.specification.frontcamera}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Camera sau</td><td className="techSpecTD2"> {this.state.specification.behindcamera}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">CPU</td><td className="techSpecTD2">{this.state.specification.cpu}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Pin</td><td className="techSpecTD2">{this.state.specification.pin}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Hệ điều hành</td><td className="techSpecTD2">{this.state.specification.os}</td></tr>
                                                                    <tr className="techSpecRow"><td className="techSpecTD1">Ngày sản xuất</td><td className="techSpecTD2">{moment(this.state.product.datesx).format('DD/MM/YYYY')}</td></tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {this.state.curPage === 2 &&
                                                <div className="tab-pane fade-in active">
                                                    <div className="row">

                                                        <div className="col-md-3">
                                                            <div id="rating">
                                                                <div className="rating-avg">
                                                                    <span>4.5</span>
                                                                    <div className="rating-stars">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o"></i>
                                                                    </div>
                                                                </div>
                                                                <ul className="rating">
                                                                    <li>
                                                                        <div className="rating-stars">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                        </div>
                                                                        <div className="rating-progress">
                                                                            <div style={{ width: '80%' }}></div>
                                                                        </div>
                                                                        <span className="sum">3</span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="rating-stars">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                        </div>
                                                                        <div className="rating-progress">
                                                                            <div style={{ width: '60%' }}></div>
                                                                        </div>
                                                                        <span className="sum">2</span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="rating-stars">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                        </div>
                                                                        <div className="rating-progress">
                                                                            <div></div>
                                                                        </div>
                                                                        <span className="sum">0</span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="rating-stars">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                        </div>
                                                                        <div className="rating-progress">
                                                                            <div></div>
                                                                        </div>
                                                                        <span className="sum">0</span>
                                                                    </li>
                                                                    <li>
                                                                        <div className="rating-stars">
                                                                            <i className="fa fa-star"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                            <i className="fa fa-star-o"></i>
                                                                        </div>
                                                                        <div className="rating-progress">
                                                                            <div></div>
                                                                        </div>
                                                                        <span className="sum">0</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div id="reviews">
                                                                <ul className="reviews">
                                                                    <li>
                                                                        <div className="review-heading">
                                                                            <h5 className="name">Hoa</h5>
                                                                            <p className="date">27/11/2018, 8:0 PM</p>
                                                                            <div className="review-rating">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star-o empty"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-body">
                                                                            <p>Sản phẩm chất lượng, giá phải chăng</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                    <div className="review-heading">
                                                                            <h5 className="name">Lan</h5>
                                                                            <p className="date">27/11/2018, 8:0 PM</p>
                                                                            <div className="review-rating">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star-o empty"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-body">
                                                                            <p>Sản phẩm chất lượng, giá phải chăng</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                    <div className="review-heading">
                                                                            <h5 className="name">Nam</h5>
                                                                            <p className="date">27/11/2018, 8:0 PM</p>
                                                                            <div className="review-rating">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star-o empty"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-body">
                                                                            <p>Sản phẩm chất lượng, giá phải chăng</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <Footer />
                </div>
            )
        }
    }
    export default Product;