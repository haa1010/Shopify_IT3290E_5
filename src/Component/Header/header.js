import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'
import  'react-bootstrap';
import Banner from '../Banner/banner'



import Cookies from 'universal-cookie';
const cookies = new Cookies() ;

class Header extends React.Component {
  
    constructor(props) {
        super(props)
        
       
        this.state = {
            brand:[],
           Cart:[],
           total:0,
            number: 0,
         
           
        }
       
        this.delete = this.delete.bind(this);
        this.seartch = this.search.bind(this);
        this.thanhtoan=this.thanhtoan.bind(this);
    }
    search(event) {
        event.preventDefault();
     console.log(this.refs.txt.value)
if(this.refs.txt.value.length!==0||this.refs.txt.value!==undefined||this.refs.txt.value!==''){
    window.location.href = '/search/'+this.refs.txt.value;
}
    }
    thanhtoan(event){
        event.preventDefault();
        cookies.set('T', this.state.Cart, { path: '/',expires:0 });
        console.log(this.props.history)
        window.location.href = '/cart';
    }
    delete(event,index) {
        event.preventDefault();


        this.setState({
            Cart: this.state.Cart.splice(index, 1)
        })


    }
    componentDidMount() {

        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              brand: result.listBrand
             
         
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
        var total=0;
        var json_str = cookies.get('T');
        if(json_str!==undefined){
            for(var i=0;i<json_str.length;i++){
               
        total+= parseInt(json_str[i].price)* parseInt(json_str[i].quantity);
            }
        }
        this.setState({
            Cart:json_str!==undefined? json_str:[],
            total:total*1000
        })
   

    }
    
    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
          
          })
     
        return (
            <div>
                <header>

                    <div id="top-header">
                        <div className="container">
                            <ul className="header-links pull-left ml-5" style={{color:'white',marginLeft:'10%'}}>
                                <li><i className="fa fa-phone"></i> +021-95-51-84</li>
                                <li><i className="fa fa-envelope-o"></i> shopify@email.com</li>
                                <li><i className="fa fa-map-marker"></i> Số 1 Đại Cồ Việt</li>
                            </ul>

                        </div>
                    </div>



                    <div id="header">

                        <div className="container">

                            <div className="row">
                                <div className="col-md-2 col-lg-2 col-4">
                                    <div className="header-logo">
                                        <Link to="/" className="logo">
                                            <img src="../../img/logo.png" alt="" width='90' height='100' />
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-md-7 col-lg-7 col-3">
                                    <div className="header-search"  style={{margin:'auto 0'}}>
                                       <form className='row'> 

                                            <select className="input-select"  style={{margin:'auto 0',fontSize:'15px'}}>
                                                <option value="0">Danh mục</option>
                                                <option value="1">Điện thoại</option>

                                            </select>
                                            <div style={{minWidth:'250px'}}>
                                            <input className="input" ref="txt" placeholder="Tìm kiếm" style={{margin:'auto 0',minWidth:'100%'}}/>
                                            </div>
                                           
                                            <button className="search-btn" onClick={(event)=>(this.search(event))}  style={{margin:'auto 0',fontSize:'15px'}}> Tìm kiếm</button>
                                            </form>
                                    </div>
                                </div>



                                <div className="col-md-3 clearfix col-lg-3 col-5">
                                    <div className="header-ctn">

                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-custom-components" style={{background:"#15161D",border:"none"}}>
                                           
								<i className="fa fa-shopping-cart mr-2 pr-3" style={{fontSize:'25px'}}></i>
       {this.state.Cart.length!==0&& <div className="qty bold" style={{position:'absolute', top:'-2px', right:'43%', color:'#D10024',fontWeight:'bold'}}>{this.state.Cart.length}</div>
    }
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                               {this.state.Cart.length!==0&& this.state.Cart.map((index, key) => {
                                                   
                                                return(
                                                    <Dropdown.Item href={"/product/"+index.IdProduct} key={key}>
                                                        <div className="product-widget" key={key}>
                                                            <div className="product-img">
                                                                <img src={index.url} alt="" width='30px' height='30px' />
                                                            </div>
                                                            <div className="product-body">
                                                                <h3 className="product-name" style={{fontSize:'13px'}}><Link to={"/product/"+index.idproduct}>{index.name}</Link></h3>
                                                                <h4 className="product-price"><span
                                                                    className="qty" style={{fontSize:'13px'}}>{index.quantity}x</span>{formatter.format(index.price*1000)}</h4>
                                                            </div>
                                                            <button className="delete" onClick={(event)=>(this.delette(event,key))}><i className="fa fa-close"></i></button>
                                                        </div>
                                                        </Dropdown.Item>)
                                                        })} 
                                                <Dropdown.Item><div className="cart-summary">
                                                   
                                                    <h5  style={{fontSize:'15px'}}>Tổng: {formatter.format(this.state.total)}</h5>
                                                </div>

                                                </Dropdown.Item>
                                                <Dropdown.Item > <div className="cart-btns">


                                                    <button className="btn btn-danger"  style={{fontSize:'15px'}} onClick={(event)=>(this.thanhtoan(event))}>Thanh toán  <i className="fa fa-arrow-circle-right"></i></button>


                                                </div></Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </div>
                                        </div>
                                        
                                       

                                    






                            </div>
                        </div>

                


            </div>

                </header >
            <Banner/>

            </div >
        )
    }
}

export default Header;