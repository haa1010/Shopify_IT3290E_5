import React from'react'
import {Link} from 'react-router-dom'

class ProductBox extends React.Component{
constructor(props){
	super(props)
	this.addItems=this.addItems.bind(this);

}
addItems(event){
	event.preventDefault();

	this.setState({
		
	})



}
    render(){
		const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'VND',
          
          })
          
        return(
            <div className={this.props.isNew? "":"col-md-4 col-lg-4 col-xs-4 col-12"} style={{marginBottom:'100px'}} >


                                        <div className="product">
											<div className="product-img">
												<img src={this.props.url} alt="" width='350px'/>
												<div className="product-label">
													
												{this.props.isNew&&	<span className="new">NEW</span>}
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Điện thoại</p>
                             <h3 className="product-name"><Link to={"/product/"+this.props.id}>{this.props.name}</Link></h3>
												<h4 className="product-price">{formatter.format(this.props.price*1000)}  </h4>
													
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													
												</div>
											</div>
											<div className="add-to-cart" style={{zIndex:'10',position:"absolute"}}>
												
												<button className="add-to-cart-btn"><Link  to={"/product/"+this.props.id}  ><i className="fa fa-shopping-cart"></i> Thêm vào giỏ</Link></button>
											</div>
										</div>

                
            </div>
        )
    }
}
export default ProductBox;