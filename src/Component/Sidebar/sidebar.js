import React from 'react';
class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          
                <div id="sidebar" class="span3">
		<div class="well well-small"><a id="myCart" href="/cart"><img src="themes/images/ico-cart.png" alt="cart"/>3 Items in your cart  <span class="badge badge-warning pull-right">$155.00</span></a></div>
		<ul id="sideManu" class="nav nav-tabs nav-stacked">
			<li class="subMenu open"><Link to='/brand/samsung'> SAMSUNG</Link>
				
			</li>
			<li class="subMenu"><Link to='/brand/iphone'> IPHONE  </Link>
			
			</li>
				
			
			<li><Link href="/brand/sony">SONY [18]</Link></li>
			<li><Link href="/brand/xiaomi">XIAOMI [58]</Link></li>
			<li><Link href="/brand/oppo">OPPO[14]</Link></li>
		</ul>
		<br/>
		  <div class="thumbnail">
			<img src="themes/images/products/xiaomi-redmi-8-blue-400x460.png" alt="Bootshop panasonoc New camera"/>
			<div class="caption">
			  <h5>Điện thoại Xiaomi Redmi 8 (3GB/32GB)</h5>
				<h4 style="text-align:center"><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">2.690.000</a></h4>
			</div>
		  </div><br/>
			<div class="thumbnail">
				<img src="themes/images/products/samsung-galaxy-s10-lite-blue-chi-tiet-400x460.png" title="Bootshop New Kindel" alt="Bootshop Kindel"/>
				<div class="caption">
				  <h5>Điện thoại Samsung Galaxy S10 Lite</h5>
				    <h4 style="text-align:center"><a class="btn" href="product_details.html"> <i class="icon-zoom-in"></i></a> <a class="btn" href="#">Add to <i class="icon-shopping-cart"></i></a> <a class="btn btn-primary" href="#">13.999.000</a></h4>
				</div>
			  </div><br/>
			
	</div>
  
        )
    }
}