import React from 'react';

import Header from '../Header/header'
import Footer from '../footer/footer'
import ProductBox from '../product/productBox'
import NewestLetter from '../newestLetter/newestLetter'
import './brand.css'

class Brand extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            product: [],


        };

    }

    componentDidMount() {

        const { match, history } = this.props;
        console.log(match.params.search)
        fetch('http://localhost:8080/products/brand/'+match.params.brand)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        product: result,


                    });
                    console.log(this.state.product);
                   
                  
                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            
       
    }
    render() {
        const { match, history } = this.props;
        console.log(match.params.brand)
        return (
            <div>
                <Header />
               


                <div id="breadcrumb" className="section">
			
			<div className="container">
			
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="/">Trang chủ</a></li>
							
							<li className="active" style={{fontSize:'15px'}}>{match.params.brand}</li>
						</ul>
					</div>
				</div>
				
			</div>
		
		</div>
                <div className="section">

                    <div className="container">

                        <div className="row">


                            <div className="col-md-12">
                                <div className="section-title">
                                    <h3 className="title">Sản phẩm</h3>

                                </div>
                            </div>

                        </div>

                        <div className="row">
                            


                                        {this.state.product.map((index, key) => (
                                            <ProductBox id={index.idproduct} name={index.nameproduct} price={index.price } url={index.urlimage} key={key} isNew={false} />
                                        ))}


                                   
                             
                        </div>
                    </div>

                </div>


                <NewestLetter />

                <Footer />
            </div >
        )
    }
}

export default Brand;