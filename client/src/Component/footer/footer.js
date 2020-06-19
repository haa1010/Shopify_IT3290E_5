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
									<h3 className="footer-title"> Về chúng tôi</h3>
									<p></p>
									<ul className="footer-links" style={{fontSize:'16px'}}>
										<li><span ><i className="fa fa-map-marker"></i>số 1 Đại Cồ Việt</span></li>
										<li><span ><i className="fa fa-phone"></i>+021-95-51-84</span></li>
										<li><span ><i className="fa fa-envelope-o"></i>shopify@email.com</span></li>
									</ul>
								</div>
							</div>
		
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Thành viên </h3>
									<ul className="footer-links" style={{fontSize:'16px'}}> 
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
									<h3 className="footer-title">Thông tin</h3>
									<ul className="footer-links" style={{fontSize:'16px'}}>
										<li>Về chúng tôi</li>
										<li>Liên hệ</li>
										<li>Điều khoản và dịch vụ</li>
										<li>Đơn hàng và đổi trả</li>
										<li>Điều kiện</li>
									</ul>
								</div>
							</div>
		
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Dịch vụ</h3>
									<ul className="footer-links" style={{fontSize:'16px'}}>
										<li>Tài khoản </li>
										<li>Giỏ hàng</li>
									
										<li>Đơn hàng</li>
										<li>Giúp đỡ</li>
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
									
									Bản quyền &copy;
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