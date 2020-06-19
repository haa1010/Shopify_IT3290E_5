import React from "react";
import "./newProduct.css";
import axios from "axios"
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'
const cookies = new Cookies();

function capitalizeFirstLetter(string) {
  string=string[0].toUpperCase() +  
  string.slice(1);
  return string;
}

const formValid = (formErrs, ...rest) => {
  let valid = true
  for (var key in formErrs) {
      formErrs[key].length > 0 && (valid = false)
  }
  rest.forEach(
      val => {
          val === null && (valid = false)
      }
  )
  return valid
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: null,
      product_id: null,
      os: null,
      cpu: null,
      price: null,
      color: null,
      url1: null,
      url2: null,
      url3: null,
      pin: null,
      quantity: null,
      memory: null,
      frontcam: null,
      backcam: null,
      brand: null,
      description: null,
      date:null,
      flag:false,
      Product:[],
      formErrors: {
        product_name: "",
        product_id: "",
        os: "",
        cpu: "",
        price: "",
        color: "",
        url1: "",
        url2: "",
        url3: "",
        pin: "",
        quantity: "",
        memory: "",
        frontcam: "",
        backcam: "",
        brand: "",
        description: "",
        date:''
      },
      error:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.logout=this.logout.bind(this);
  }

  logout(){
    cookies.remove('login');
    window.location.href = '/'; 
}
  handleSubmit = async e => {
    e.preventDefault();
    if (formValid(this.state.formErrors,this.state.backcam,this.state.brand,this.state.color,this.state.cpu,this.state.description,this.state.frontcam,this.state.os,this.state.pin,this.state.product_id,this.state.product_name,this.state.quantity,this.state.url1,this.state.url2,this.state.url3,this.state.behind)) {
      var flat=0;
     
      for (var i = 0; i < this.state.Product.length; i++) {
        if (!this.state.Product[i].localeCompare(this.state.id)) {
          flat = 1;
          break;
        }
      }
      if (flat === 0) {

        let data = {

          product: {
            id: this.state.product_id,
            name: this.state.product_name,
            price: this.state.price,
            brand:  this.state.brand
          },
          detail: {
            id: this.state.product_id,
            date: this.state.date,
            description: this.state.description
          },
          color: [
            {
              id: this.state.product_id,
              color:  this.state.color,
              qty: this.state.quantity
            }
          ],
          spec: {
            id: this.state.product_id,
            memory: this.state.memory,
            front: this.state.frontcam,
            behind: this.state.backcam,
            cpu: this.state.cpu,
            os: this.state.os,
            pin: this.state.pin
          },
          urlImage: [
            {
              id: this.state.product_id,
              url: this.state.url1
            },
            {
              id:this.state.product_id,
              url: this.state.url2
            },
            {
              id: this.state.product_id,
              url: this.state.url3
            }
          ]
        }
       
        const options = {
          method: 'post',
          url: 'http://localhost:8080/admin/create',
          data: data
        }
  
        axios(options)
          .then(function (response) {
            console.log(data)
            alert("thêm thành công")
          
          })
          .catch(function (error) {
            alert("Đã xảy ra lỗi, vui lòng đặt lại")
            console.log(error);
          });
       
      
      }
     } else {
    
        this.setState({ flag: true,error:'Thiếu thông tin hoặc ID đã tồn tại' })
    

      
    }
    
      
    
    
  };

  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors

    switch (name) {
      case "product_name":
        formErrors.product_name =
          value.length === 0 ? "Vui lòng nhập tên sản phẩm" : "";
        break;
      case "product_id":
        formErrors.product_id =
          value.length === 0 ? "Vui lòng nhập ID sản phẩm" : "";
        break;
      case "os":
        formErrors.os =
          value.length === 0 ? "Vui lòng nhập hệ điều hành sản phẩm" : "";
        break;
      case "cpu":
          formErrors.cpu =
            value.length === 0 ? "Vui lòng nhập CPU sản phẩm" : "";
        break;
      case "price":
          formErrors.price =
            value.length === 0 ? "Vui lòng nhập giá sản phẩm" : "";
        break;

        case "color":
          formErrors.color =
            value.length === 0 ? "Vui lòng nhập màu sản phẩm" : "";
        break;
        case "url1":
          formErrors.url =
            value.length === 0 ? "Vui lòng nhập URL hình ảnh" : "";
        break;
        case "url2":
          formErrors.url =
            value.length === 0 ? "Vui lòng nhập URL hình ảnh" : "";
        break;
        case "url3":
          formErrors.url =
            value.length === 0 ? "Vui lòng nhập URL hình ảnh" : "";
        break;
        case "pin":
          formErrors.pin =
            value.length === 0 ? "Vui lòng nhập pin" : "";
        break;
        case "quantity":
          formErrors.quantity =
            value.length === 0 ? "Vui lòng nhập số lượng sản phẩm" : "";
        break;
        case "frontcam":
          formErrors.frontcam =
            value.length === 0 ? "Vui lòng nhập số liệu cam trước" : "";
        break;
        case "memory":
          formErrors.memory = 
          value.length === 0 ? "Vui lòng nhập bộ nhớ sản phẩm" : "";
          break;
        case "backcam":
          formErrors.backcam =
            value.length === 0 ? "Vui lòng nhập số liệu cam sau" : "";
        break;
        case "brand":
        formErrors.brand =
          value.length === 0 ? "Vui lòng nhập tên hãng sản xuất" : "";
        break;
        case "description":
        formErrors.description =
          value.length === 0 ? "Vui lòng mô tả sản phẩm" : "";
        break;
case 'date':formErrors.date =
value.length === 0 ? "Vui lòng nhap ngay sx sản phẩm" : "";
break;
      
      
      default:
        break;
    }
;
    this.setState({ formErrors, [name]: value } );
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
  
    // const [selectedDate, setSelectedDate] = useState(null)
    return (



      <div>

      <div id="top-header" style={{ height: '50px' }}>
        <div className="container">
          <ul className="header-links pull-left ml-5" style={{ color: 'white', marginLeft: '10%' }}>
            <li><i className="fa fa-phone"></i> +021-95-51-84</li>
            <li><i className="fa fa-envelope-o"></i> shopify@email.com</li>
            <li><i className="fa fa-map-marker"></i> Số 1 Đại Cồ Việt</li>
            <li className="pull-right" onClick={this.logout}>  Đăng xuất</li>
          </ul>

        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#e8f4f8' }} >
        <div className='container' style={{ minHeight: '100vh' }}>


          <nav className="navbar navbar-expand-lg">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">


            <ul class="navbar-nav d-flex justify-content-around pt-4 pb-5" style={{fontSize:'20px'}}>
                <li className="nav-item mr-5" > <Link to='/dashboard'>Thống kê đơn hàng</Link></li>
                <li className="nav-item  justify-content-around mr-5"  ><Link to='/dashboard/store'> Thống kê sản phẩm </Link></li>
                <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addNew'>Thêm sản phẩm mới</Link></li>
                <li className="nav-item  justify-content-around mr-5" > <Link to='/dashboard/addOld'>Thêm sản phẩm cũ</Link></li>


              </ul>
            </div>
          </nav>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Nhập thông tin sản phẩm </h1>
          <form onSubmit={this.handleSubmit} noValidate style={{fontSize:'20px'}}>
            <div className="product_name">
              <label htmlFor="product_name">Tên sản phẩm</label>
              <input
                className={this.state.formErrors.product_name.length > 0 ? "error" : null}
                placeholder="Tên"
                type="text"
                name="product_name"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.product_name.length > 0 &&  (
                <span className="errorMessage">{this.state.formErrors.product_name}</span>
              )}
            </div>
            <div className="product_id">
              <label htmlFor="product_id">ID sản phẩm</label>
              <input
                className={this.state.formErrors.product_id.length > 0 ? "error" : null}
                placeholder="ID"
                type="text"
                name="product_id"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.product_id.length > 0 &&(
                <span className="errorMessage">{this.state.formErrors.product_id}</span>
              )}
            </div>
             <div className="os">
              <label htmlFor="os">Hệ điều hành</label>
              <input
                className={this.state.formErrors.os.length > 0 ? "error" : null}
                placeholder="Hệ điều hành"
                type="text"
                name="os"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.os.length > 0 &&(
                <span className="errorMessage">{this.state.formErrors.os}</span>
              )}
            </div> 
             <div className="cpu">
              <label htmlFor="cpu">CPU</label>
              <input
                className={this.state.formErrors.cpu.length > 0 ? "error" : null}
                placeholder="CPU"
                type="text"
                name="cpu"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.cpu.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.cpu}</span>
              )}
            </div> 
            <div className="price">
              <label htmlFor="price">Giá</label>
              <input
                className={this.state.formErrors.price.length > 0 ? "error" : null}
                placeholder="VND"
                type="number"
                name="price"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.price.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.price}</span>
              )}
            </div>
            <div className="color">
              <label htmlFor="color">Màu</label>
              <input
                className={this.state.formErrors.color.length > 0 ? "error" : null}
                placeholder="Màu"
                type="text"
                name="color"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.color.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.color}</span>
              )}
            </div>

            <div className="pin">
              <label htmlFor="pin">Pin</label>
              <input
                className={this.state.formErrors.pin.length > 0 ? "error" : ''}
                placeholder="mAh"
                type="number"
                name="pin"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.pin.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.pin}</span>
              )}
            </div>
            <div className="quantity">
              <label htmlFor="quantity">Số lượng sản phẩm</label>
              <input
                className={this.state.formErrors.quantity.length > 0 ? "error" : null}
                placeholder=""
                type="number"
                name="quantity"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.quantity.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.quantity}</span>
              )}
            </div>
            
            <div className="url">
              <label htmlFor="url">URL hình ảnh 1</label>
              <input
                className={this.state.formErrors.url1.length > 0 ? "error" : null}
                placeholder="https://"
                type="url"
                name="url1"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.url1.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.url1}</span>
              )}
            </div>
            <div className="url">
              <label htmlFor="url">URL hình ảnh 2</label>
              <input
                className={this.state.formErrors.url2.length > 0 ? "error" : null}
                placeholder="https://"
                type="url"
                name="url2"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.url2.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.url2}</span>
              )}
            </div>
            <div className="url">
              <label htmlFor="url">URL hình ảnh 3</label>
              <input
                className={this.state.formErrors.url3.length > 0 ? "error" : null}
                placeholder="https://"
                type="url"
                name="url3"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.url3.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.url3}</span>
              )}
            </div>
            <div className="memory">
              <label htmlFor="memory">Bộ nhớ</label>
              <input
                className={this.state.formErrors.memory.length > 0 ? "error" : null}
                placeholder="Gb"
                type="number"
                name="memory"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.memory.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.memory}</span>
              )}
            </div>


            <div className="frontcam">
              <label htmlFor="frontcam">Camera trước</label>
              <input
                className={this.state.formErrors.frontcam.length > 0 ? "error" : null}
                placeholder="MP"
                type="number"
                name="frontcam"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.frontcam.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.frontcam}</span>
              )}
            </div>
            <div className="backcam">
              <label htmlFor="backcam">Camera sau</label>
              <input
                className={this.state.formErrors.backcam.length > 0 ? "error" : null}
                placeholder="MP"
                type="number"
                name="backcam"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.backcam.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.backcam}</span>
              )}
            </div>

            <div className="brand">
              <label htmlFor="brand">Hãng sản xuất</label>
              <input
                className={this.state.formErrors.brand.length > 0 ? "error" : null}
                placeholder=""
                type="text"
                name="brand"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.brand.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.brand}</span>
              )}
            </div>
            <div className="description">
              <label htmlFor="description">Mô tả</label>
              <input
                className={this.state.formErrors.description.length > 0 ? "error" : null}
                placeholder=""
                type="text"
                name="description"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.description.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.description}</span>
              )}
            </div>
            <div className="product_date">
              <label htmlFor="product_date">Ngày sản xuất</label>
              <input
                className={this.state.formErrors.date.length > 0 ? "error" : null}
                placeholder=""
                type="date"
                name="date"
                noValidate
                onChange={this.handleChange}
              />
               {this.state.formErrors.date.length > 0 && (
                <span className="errorMessage">{this.state.formErrors.date}</span>
              )}
            </div>
               {this.state.flag&&<span className='errorMessage'>{this.state.error}</span>}
            <div className="formSubmit">
              <button type="submit">Xác nhận</button>
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

export default App;
