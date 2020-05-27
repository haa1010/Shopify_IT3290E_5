import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Link } from 'react-router-dom';

let validation = () => {
	var product_name = document.forms["InputForm"]["product_name"];			 
	var product_id = document.forms["InputForm"]["product_id"]; 
	var price = document.forms["InputForm"]["price"]; 
	var color = document.forms["InputForm"]["color"]; 
    var CPU = document.forms["InputForm"]["CPU"]; 
    var OS = document.forms["InputForm"]["OS"]; 
    var brand = document.forms["InputForm"]["brand"];
    var memory = document.forms["InputForm"]["memory"];
    var pin = document.forms["InputForm"]["pin"]; 
    var quantity = document.forms["InputForm"]["quantity"];
    var frontcam = document.forms["InputForm"]["frontcam"];
    var backcam = document.forms["InputForm"]["backcam"];
    var ngaySX = document.forms["InputForm"]["ngaySX"];
    var URL = document.forms["InputForm"]["URL"];

	if (product_name.value == "")								 
	{ 
		window.alert("Hãy nhập tên sản phẩmphẩm"); 
		product_name.focus(); 
		return false; 
	} 

	if (product_id.value == "")							 
	{ 
		window.alert("Hãy nhập ID sản phẩm"); 
		product_id.focus(); 
		return false; 
	} 
	
	if (price.value == "" || price.value <= 0) 								 
	{ 
		window.alert("Hãy nhập giá sản phẩm hợp lệ"); 
		price.focus(); 
		return false; 
	} 

	if (color.value == "")						 
	{ 
		window.alert("Hãy nhập màu cho sản phẩm"); 
		color.focus(); 
		return false; 
	} 

	if (CPU.value == "")					 
	{ 
		window.alert("Hãy nhập tên CPU cho sản phẩm"); 
		CPU.focus(); 
		return false; 
	} 

	if (OS.value == "")				 
	{ 
		alert("Hãy nhập tên hệ điều hành cho sản phẩm"); 
		OS.focus(); 
		return false; 
	} 

	return true;  

}

class NewProduct extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                    <div className="card-body">
                    <h2 className="title">Input Form</h2>
        <form name="InputForm" action="" onsubmit="return validation()" method="POST">
                    <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Tên Sản Phẩm</label>
                        <input className="input--style-4" type="text" name="product_name" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">ID Sản Phẩm</label>
                        <input className="input--style-4" type="text" name="product_id" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Giá</label>
                        <div className="input-group-icon">
                        <input className="input--style-4 js-datepicker" type="number" name="price" />
                        </div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Màu</label>
                        <div className="input-group-icon">
                        <input className="input--style-4 js-datepicker" type="text" name="color" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">CPU</label>
                        <input className="input--style-4" type="text" name="CPU" />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Hệ Điều Hành</label>
                        <input className="input--style-4" type="text" name="OS" />
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
                        <input className="input--style-4" type="numbernumber" name="memory" />
                    </div>
                    </div>
                </div>
                <div className="row row-space">
                    <div className="col-2">
                    <div className="input-group">
                        <label className="label">Pin</label>
                        <input className="input--style-4" type="number" name="pin" />
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
                        <label className="radio-container">
                            <button className="btn btn--radius-2 btn--blue" type="button"><a href= "/home" style={{color: 'white', textDecoration: 'none'}}> Back </a></button>
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