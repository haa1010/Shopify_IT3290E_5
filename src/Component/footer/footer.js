import React from 'react';
class Footer extends React.Component{
    render(){
        return(
		
			<footer id="footer">
			
				<div className="section">
					
					<div className="container">
					
						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">About Us</h3>
									<p></p>
									<ul className="footer-links">
										<li><span ><i className="fa fa-map-marker"></i>số 1 Đại Cồ Việt</span></li>
										<li><span ><i className="fa fa-phone"></i>+021-95-51-84</span></li>
										<li><span ><i className="fa fa-envelope-o"></i>shopify@email.com</span></li>
									</ul>
								</div>
							</div>
		
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Members</h3>
									<ul className="footer-links">
										<li>1.Trần Thị Hằng</li>
										<li>2.Dương Thị Huê</li>
										<li>3.Quyền Quang Huy</li>
										<li>4.Cao Quốc Khánh</li>
										
									</ul>
								</div>
							</div>
		
							<div className="clearfix visible-xs"></div>
		
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li>About Us</li>
										<li>Contact Us</li>
										<li>Privacy Policy</li>
										<li>Orders and Returns</li>
										<li>Terms & Conditions</li>
									</ul>
								</div>
							</div>
		
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Service</h3>
									<ul className="footer-links">
										<li>My Account</li>
										<li>View Cart</li>
										<li>Wishlist</li>
										<li>Track My Order</li>
										<li>Help</li>
									</ul>
								</div>
							</div>
						</div>
				
					</div>
				
				</div>
				
		
			
				<div id="bottom-footer" className="section">
					<div className="container">
				
						<div className="row">
							<div className="col-md-12 text-center">
								<ul className="footer-payments">
									<li><i className="fa fa-cc-visa"></i></li>
									<li><i className="fa fa-credit-card"></i></li>
									<li><i className="fa fa-cc-paypal"></i></li>
									<li><i className="fa fa-cc-mastercard"></i></li>
									<li><i className="fa fa-cc-discover"></i></li>
									<li><i className="fa fa-cc-amex"></i></li>
								</ul>
								<span className="copyright">
									
									Copyright &copy;
									<script>document.write(new Date().getFullYear());</script> All rights reserved | This
									template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> 
									
								</span>
							</div>
						</div>
					
					</div>
					
				</div>
				
			</footer>
			
        )
    }
}

export default Footer;