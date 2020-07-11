import React from 'react'
import Header from '../Header/header'
import Footer from '../footer/footer'
import axios from "axios"
import swal from 'sweetalert';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var json_str = cookies.get('T');
console.log(json_str)

class Cart extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			style: { border: "0.5px solid #E4E7ED" },
			Cart: json_str !== undefined ? json_str : [],
			total: 0,
			styleName: { boder: '0.5px solid #E4E7ED' },
			styleDiachi: { boder: '0.5px solid #E4E7ED' },
			errPhone: '',
			erroName: '',
			errdiachi: '',
			errForm: '',
			ten: '',
			diachi: '',
			phone: '',
			phonenumber: ''



		}
		this.checkname = this.checkname.bind(this);
		this.checkphone = this.checkphone.bind(this);
		this.checkOrder = this.checkOrder.bind(this);
		this.checkdiachi = this.checkdiachi.bind(this);
	}
	checkname() {

console.log(this.refs.ten.value.length)
		if (this.refs.ten.value.length === 0 || this.refs.ten.value === undefined) {
			this.setState({ styleName: { border: '1px solid red' }, erroName: "Bạn chưa nhập tên", trueName: 0, ten: '' })
		}
		else {
			this.setState({ styleName: { border: '0.5px solid #E4E7ED' }, erroName: "", trueName: 1, ten: this.refs.ten.value })
		}


	}

	checkdiachi() {

		if (this.refs.diachi.value.length === 0 || this.refs.diachi.value === undefined) {
			this.setState({ styleDiachi: { border: '1px solid red' }, errdiachi: "Bạn chưa nhập địa chỉ", trueDiachi: 0, diachi: '' })
		}
		else {
			this.setState({ styleDiachi: { border: '0.5px solid #E4E7ED' }, errdiachi: "", trueDiachi: 1, diachi: this.refs.diachi.value })
		}

	}
	checkOrder = async e => {
		e.preventDefault()
		swal({
			title: "Bạn có chắc chắn đặt hàng?",
			text: "",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((willDelete) => {
			if (willDelete) {
				if (this.state.trueDiachi === 1 && this.state.trueName === 1 && this.state.phoneState === 1) {
		
					var order = {
						receiver: this.state.ten,
						phone: this.state.phone,
						address: this.state.diachi,
						cost: this.state.total,
						items: this.state.Cart
					}
					// console.log(order)
					const options = {
						method: 'post',
						url: 'http://localhost:8080/newOrder',
						data: order
					}
		
					axios(options)
						.then(function (response) {
							console.log(order)
							swal({
								title: "Đặt hàng thành công",
								text: "Nhân viên Shopify sẽ sớm liên lạc cho quý khách để xác nhận đơn hàng ",
								icon: "success",
								dangerMode: true,
							  }).then((value) => {
								 window.location.href = '/';
							  });
							
						})
						.catch(function (error) {
							swal({
								title: "Đặt hàng không thành công",
								text: "Quý khách vui lòng thử lại",
								icon: "warning",
								dangerMode: true,
							  })
						});
					cookies.remove('T');
		
		
		
				}
				else {
					swal({
						title: "Đặt hàng không thành công",
						text: "Quý khách vui lòng điền đầy đủ thông tin ",
						icon: "warning",
						dangerMode: true,
					  })
					
				}
			} 
		  });
		


	}
	checkphone() {
		var phone = this.refs.phonenumber.value;

		if (phone.length === 0) {
			this.setState({
				style: { boder: '1px solid red' },
				phoneState: 0,
				errPhone: "Vui lòng nhập số điện thoại"
			})


		}
		else
			if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone)) {
				this.setState({
					style: { boder: '1px solid red' },
					phoneState: 0,
					errPhone: "Số điện thoại không đúng",
					phone: ''
				})


			}
			else {
				if (/((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone))

					this.setState({
						style: { boder: '0.5px solid #E4E7ED' },
						phoneState: 1,
						errPhone: '',
						phone: phone
					})


			}
	}
	componentDidMount() {



		var total = 0;

		if (json_str !== undefined) {
			for (var i = 0; i < json_str.length; i++) {

				total += parseInt(json_str[i].price) * parseInt(json_str[i].quantity);
			}
		} else if (json_str === undefined || json_str.length === 0) { this.setState({ StateCart: 'Chưa có sản phầm trong giỏ hàng' }) }


		this.setState({
			Cart: cookies.get('T') !== undefined ? cookies.get('T') : [],
			total: total
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
									<li><a href="/">Trang chủ</a></li>
									<li className="active">Mua hàng</li>
								</ul>
							</div>
						</div>

					</div>

				</div>
				{this.state.Cart.length !== 0 &&
					<div className="section">

						<div className="container">

							<div className="row">
								<form onSubmit={this.checkOrder} style={{ fontSize: '20px', width: '100%' }}>
									<div className="col-md-6 col-lg-6">

										<div className="billing-details">
											<div className="section-title">


												<h3 className="title" style={{fontSize:'23px'}}>Thông tin khách hàng</h3>
											</div>
											<div className="form-group">
												<input className="input" type="text" name="name" style={this.state.styleName} ref="ten" placeholder=" Tên" onBlur={this.checkname} />
												<p id="wrongname" style={{  color: 'red' }}>{this.state.erroName}</p>
											</div>
											<div className="form-group">
												<input className="input" type="text" style={this.state.styleDiachi} name="address" ref="diachi" placeholder="Địa chỉ" onBlur={this.checkdiachi} />
												<p id="wrongdiachi" style={{ color: 'red' }}>{this.state.errdiachi}</p>
											</div>
											<div className="form-group">
												<input className="input" style={this.state.style} type="tel" ref='phonenumber' name="tel" id='phonenumber' placeholder="Số điện thoại" onBlur={this.checkphone} />
												<p id="wrongPhone" style={{color: 'red' }}>{this.state.errPhone}</p>
											</div>

										</div>

										<div className="order-notes">
											<textarea className="input" placeholder="Ghi chú"></textarea>
										</div>
										{this.state.errForm !== '' && <h4 style={{ border: '1px solid red', color: 'red', height: '25px' }}> {this.state.errForm}</h4>
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

															<div className=" justify-content-between"> {formatter.format(index.price * 1000)}</div>
														</div>)

												)}

												<div className="order-col">
													<div>Shipping</div>
													<div><strong>FREE</strong></div>
												</div>
												<div className="order-col">
													<div><strong>Thành tiền</strong></div>
													<div><strong className="order-total">{formatter.format(this.state.total * 1000)}</strong></div>
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
				{this.state.Cart.length === 0 && <h3 style={{ marginLeft: '20%' }}>Chưa có sản phẩm nào trong giỏ hàng</h3>
				}<Footer />
			</div>
		)
	}
}
export default Cart;