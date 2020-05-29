import React, { Component } from 'react';
import '../App.css';


const initialState = {
    product_name: "",
    product_id: "",
    price: "",
    color: "",
    cpu: "",
    os: "",
    url: "",
    pin: "",
    quantity: "",
    subject: "",
    product_nameError: "",
    product_idError: "",
    priceError: "",
    colorError: "",
    cpuError: "",
    osError: "",
    urlError: "",
    pinError: "",
    quantityError: "",
    subjectError: ""
}

    class NewProduct extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };
    
    state = initialState;
    
    
    
      validate = () => {
        let product_nameError = "";
        let product_idError= "";
        let priceError= "";
        let colorError= "";
        let cpuError= "";
        let osError= "";
        let urlError= "";
        let pinError= "";
        let quantityError= "";
        let subjectError= "";
    
        if(!this.state.product_name) {
            product_nameError = "Vui lòng nhập tên của sản phẩm";
        }
        
        if(!this.state.product_id) {
            product_idError = "Vui lòng nhập ID của sản phẩm";
        }
    
        if(!this.state.price) {
            priceError = "Vui lòng nhập giá của sản phẩm";
        }
    
        if(this.state.price < 0) {
            priceError = "Giá sản phẩm không hợp lệ";
        }
    
        if(!this.state.color) {
            colorError = "Vui lòng nhập màu của sản phẩm";
        }
    
        if(!this.state.cpu) {
            cpuError = "Vui lòng nhập tên CPU của sản phẩm";
        }
    
        if(!this.state.os) {
            osError = "Vui lòng nhập tên CPU của sản phẩm";
        }
    
        if(!this.state.url) {
            urlError = "Vui lòng nhập đường dẫn hình ảnh của sản phẩm";
        }
    
        if(!this.state.pin) {
            pinError = "Vui lòng nhập thông số pin của sản phẩm";
        }
    
        if(!this.state.pin < 0) {
            pinError = "Thông số pin không hợp lệ";
        }
    
        if(!this.state.quantity) {
            quantityError = "Vui lòng nhập số lượng sản phẩm";
        }
    
        if(!this.state.quantity < 0) {
            quantityError = "Số lượng sản phẩm không hợp lệ";
        }
    
        if(!this.state.subject) {
            subjectError = "Lựa chọn này không được để trống"
        }
    
        if(!this.state.url.includes("http")) {
            urlError = "Đường dẫn sai định dạng";
        }
        if (product_idError || product_nameError || priceError || colorError || cpuError || osError || urlError || pinError || quantityError || subjectError) {
            this.setState({product_nameError, product_idError, priceError, colorError, cpuError, osError, urlError, pinError, quantityError, subjectError });
            return false;
        }
        return true;
      };
    
    
      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            //clear form
            this.setState(initialState);
        }
    
      };
    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                    <div className="card-body">
                    <h2 className="title">Input Form</h2>
        <form name="InputForm" action="" onSubmit={this.handleSubmit()} method="POST">
                    <div className="row row-space">

                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Tên Sản Phẩm</label>
                        <input className="input--style-4" 
                        type="text" 
                        value={this.state.product_name} 
                        onChange={this.handleChange} 
                        name="product_name" />
                    </div>

                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">ID Sản Phẩm</label>
                        <input className="input--style-4" 
                        type="text" 
                        value={this.state.product_id} 
                        onChange={this.handleChange} 
                        name="product_id" />
                    </div>
                    </div>

                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Giá</label>
                        <div className="input-group-icon">
                        <input className="input--style-4 js-datepicker" 
                        type="number" 
                        value={this.state.price} 
                        onChange={this.handleChange} 
                        name="price" />
                        </div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Màu</label>
                        <div className="input-group-icon">
                        <input className="input--style-4 js-datepicker" 
                        type="text" 
                        value={this.state.color} 
                        onChange={this.handleChange} 
                        name="color" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">CPU</label>
                        <input className="input--style-4" 
                        type="text" 
                        value={this.state.cpu} 
                        onChange={this.handleChange} 
                        name="cpu" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Hệ Điều Hành</label>
                        <input className="input--style-4" 
                        type="text" 
                        value={this.state.os} 
                        onChange={this.handleChange} 
                        name="os" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Hãng Phát Hành</label>
                        <input className="input--style-4" type="text" name="brand" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Bộ Nhớ</label>
                        <input className="input--style-4" type="number" name="memory" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Pin</label>
                        <input className="input--style-4" type="number" value={this.pin} onChange={this.handleChange} name="pin" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Số Lượng</label>
                        <input className="input--style-4" type="number" name="quantity" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Camera Trước</label>
                        <input className="input--style-4" type="number" name="frontcam" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Camera Sau</label>
                        <input className="input--style-4" type="number" name="backcam" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label">Ngày Sản Xuất</label>
                        <div className="input-group-icon">
                            <input className="input--style-4 js-datepicker" type="" name="ngaysx" />
                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                        </div>
                        </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">URL Hình Ảnh</label>
                        <input className="input--style-4" type="text" name="URL" />
                    </div>
                    </div>
                </div>


                    <div className="input-group">
                    <label className="label" />
                    <div className="p-t-10">
                        <label className="radio-container m-r-45">
                        <div className="radio-container">
                        <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                        </div>
                        </label>
                    </div>
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

export default NewProduct;