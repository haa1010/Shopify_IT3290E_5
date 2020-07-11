import React from 'react';

class banner extends  React.Component{
	constructor(props) {
        super(props)
        
       
        this.state = {
            brand:[],
          
           
		}
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
       

    }
    render(){
        return(
<div className='container'>
<nav class="navbar navbar-expand-lg">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">


    <ul class="navbar-nav " style={{fontSize:'20px'}}>
      <li className="nav-item mr-5" > <a href="/">Trang chủ</a></li>
			 {this.state.brand&&this.state.brand.map((index, key) => (
				<li className="nav-item mr-5 "  key={key}><a href={"/brand/"+index}>{index}</a></li>
			))

			} 
    </ul>
  </div>
</nav>


	  </div> 

        )
    }
}
export default banner;
