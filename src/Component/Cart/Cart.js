import React from 'react'
import Header from '../Header/header'
import Footer from '../footer/footer'
import axios from "axios"
import qs from "querystring"
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var json_str = cookies.get('T');
console.log(json_str)

class Cart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			style: { border: "0.5px solid #E4E7ED" },
			Cart: json_str!==undefined? json_str:[],
			total: 0,
			styleName: { boder: '0.5px solid #E4E7ED' },
			styleDiachi: { boder: '0.5px solid #E4E7ED' },
			errPhone: '',
			erroName: '',
			errdiachi: '',
			errForm:'',
			ten:'',
			diachi:'',
			phone:'',
			phonenumber:''



		}
		this.checkname = this.checkname.bind(this);
		this.checkphone = this.checkphone.bind(this);
		this.checkOrder = this.checkOrder.bind(this);
this.checkdiachi=this.checkdiachi.bind(this);
	}
	checkname() {

		
		if (this.refs.ten.value.length === 0 || this.refs.ten.value === undefined) {
			this.setState({ styleName: { boder: '1px solid red' }, erroName: "bạn chưa nhập tên", trueName: 0,ten:'' })
		}
		else  {
			this.setState({ styleName: { boder: '0.5px solid #E4E7ED' }, erroName: "", trueName: 1,ten:this.refs.ten.value })
		}
	

	}

	checkdiachi() {
		
		if (this.refs.diachi.value.length === 0 || this.refs.diachi.value === undefined) {
			this.setState({ styleDiachi: { boder: '1px solid red' }, errdiachi: "bạn chưa nhập địa chỉ", trueDiachi: 0,diachi:'' })
		}
		else  {
			this.setState({ styleName: { boder: '0.5px solid #E4E7ED' }, errdiachi: "", trueDiachi: 1 ,diachi:this.refs.diachi.value})
		}
		
	}
	checkOrder = async e => {
		e.preventDefault()
		console.log(this.state.Cart)
		if (this.state.trueDiachi === 1 && this.state.trueName === 1 && this.state.phoneState ===1) {
			
			var order = {
				date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
				receiver: this.state.ten,
				phone: this.state.phone,
				address: this.state.diachi,
				cost: this.state.total,
				items:  cookies.get('T')

			}
			// console.log(order)

			axios.post('http://localhost:8080/newOrder',  qs.stringify(order),)
			  .then(function (response) {
				  console.log(order)
				alert("Đặt hàng thành công. Nhân viên Shopify sẽ liên lạc sớm cho quý khách để xác nhận đơn hàng.")
				setTimeout(  window.location.href = '/',2000)
			  })
			  .catch(function (error) {
				console.log(error);
			  });
			cookies.remove('T');
			
			

		}
		else {
			this.setState({
				errForm:"Vui lòng nhập từng dữ liệu"
			})
		}


	}
	checkphone() {
		var phone = this.refs.phonenumber.value;
	
		if (phone.length === 0) {
			this.setState({
				style: { boder: '1px solid red' },
				phoneState: 0,
				errPhone: "nhập số điện thoại"
			})


		}
		else
			if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone)) {
				this.setState({
					style: { boder: '1px solid red' },
					phoneState: 0,
					errPhone: "Số điện thoại không đúng",
					phone:''
				})


			}
			else {if(/((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone))

				this.setState({
					style: { boder: '0.5px solid #E4E7ED' },
					phoneState: 1,
					errPhone: '',
					phone:phone
				})


			}
	}
	componentDidMount() {


		
		var total = 0;

		if (json_str !== undefined) {
			for (var i = 0; i < json_str.length; i++) {

				total += parseInt(json_str[i].price) * parseInt(json_str[i].quantity);
			}
		} else if (json_str === undefined||json_str.length===0) { this.setState({ StateCart: 'chưa có sản phầm trong giỏ hàng' }) }


		this.setState({
			Cart: cookies.get('T')!==undefined?cookies.get('T'):[] ,
			total: total * 1000
		})
console.log(this.state.Cart)

	}
	render() {
		const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
          
          })
		return (
			<div>

				<Header />
				<div id="breadcrumb" className="section">

					<div className="container">

						<div className="row">
							<div className="col-md-12">
								<h3 className="breadcrumb-header">Mua hàng</h3>
								<ul className="breadcrumb-tree">
									<li><a href="/">Home</a></li>
									<li className="active">Mua hàng</li>
								</ul>
							</div>
						</div>

					</div>

				</div>
				{this.state.Cart.length !==0 &&
					<div className="section">

						<div className="container">

							<div className="row">
								<form onSubmit={this.checkOrder} style={{ fontSize: '20px' ,width:'100%'}}>
									<div className="col-md-6 col-lg-6">

										<div className="billing-details">
											<div className="section-title">


												<h3 className="title">Thông tin khách hàng</h3>
											</div>
											<div className="form-group">
												<input className="input" type="text" name="name" style={this.state.styleName} ref="ten" placeholder=" Name" onChange={this.checkname} />
												<p id="wrongname" style={{ display: 'none', color: 'red' }}>{this.state.erroName}</p>
											</div>
											<div className="form-group">
												<input className="input" type="text" style={this.state.styleDiachi} name="address" ref="diachi" placeholder="Address" onChange={this.checkdiachi} />
												<p id="wrongdiachi" style={{ display: 'none', color: 'red' }}>{this.state.errdiachi}</p>
											</div>
											<div className="form-group">
												<input className="input" style={this.state.style} type="tel" ref='phonenumber' name="tel" id='phonenumber' placeholder="Telephone" onChange={this.checkphone} />
												<p id="wrongPhone" style={{ display: 'none', color: 'red' }}>{this.state.errPhone}</p>
											</div>

										</div>
			
										<div className="order-notes">
											<textarea className="input" placeholder="Order Notes"></textarea>
										</div>
										{this.state.errForm!==''&&<h4 style={{border:'1px solid red',color:'red',height:'25px'}}> {this.state.errForm}</h4>
	}

									</div>


									<div className="col-md-6 col-lg-6 order-details">
										<div className="section-title text-center">
											<h3 className="title">Đơn hàng</h3>
										</div>
										<div className="order-summary">
											<div className="justify-content-between d-flex">
												<div className="justify-content-between"><strong>Sản phẩm</strong>
												
												
												</div>
												
												<div className=" justify-content-between" ><strong>Giá </strong></div>
												</div>
											<div className="order-products">
													{this.state.Cart.map((index, key) => 

														 (

															<div className=" justify-content-between d-flex" key={key}>
																<div className=" justify-content-between">
																{index.quantity} x{index.name}</div>
																
																<div className=" justify-content-between"> {formatter.format(index.price*1000)}</div>
															</div>)

													)}

												<div className="order-col">
													<div>Shiping</div>
													<div><strong>FREE</strong></div>
												</div>
												<div className="order-col">
													<div><strong>Thành tiền</strong></div>
													<div><strong className="order-total">{formatter.format(this.state.total)}</strong></div>
												</div>
											</div>


											<input type='submit' className="primary-btn order-submit" value='Đặt hàng' />
										</div>

									</div>

								</form>

							</div>

						</div>
					</div>
				}
			{this.state.Cart.length===0&&	<h3  style={{marginLeft:'20%'}}>Chưa có sản phẩm nào trong giỏ hàng</h3>
			}<Footer />
			</div>
		)
	}
}
export default Cart;