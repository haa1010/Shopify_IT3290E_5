import React from 'react';

class banner extends  React.Component{

    render(){
        return(

	<div id="myCarousel" className="carousel slide">
		<div className="carousel-inner">
		  <div className="item active">
		 
			<a href="register.html"><img style={{width:'100%'}} src="themes/images/carousel/1.png" width=" 100%" alt="special offers"/></a>
			
		 
		  </div>
		
		  <div className="item">
		 
			<a href="register.html"><img src="themes/images/carousel/3.png" width=" 100%"alt=""/></a>
			
			
		
		  </div>
		   <div className="item">
		
			<a href="register.html"><img src="themes/images/carousel/4.jpg" width=" 100%" alt=""/></a>
		
		   
	
		  </div>
		   
		   <div className="item">
		  
			<a href="register.html"><img src="themes/images/carousel/6.jpg"width=" 100%" alt=""/></a>
	
		  </div>
		</div>
		<a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
		<a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
	  </div> 

        )
    }
}
export default banner;
