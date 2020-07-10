import React from 'react';

import Header from '../Header/header'
import Footer from '../footer/footer'
import ProductBox from '../product/productBox'
import NewestLetter from '../newestLetter/newestLetter'

import Cookies from 'universal-cookie';
const cookies = new Cookies() ;
class search extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            product: [],
            url:[]


        };

    }

    componentDidMount() {

        const { match, history } = this.props;
        console.log(match.params.search)
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(
                (result) => {
                   
                    console.log(this.state.product);
                    var Product=[];
                    var index=[];
                    for(var i=0;i<result.detail.length;i++){
                       if(result.detail[i].nameproduct.toLowerCase().match(match.params.search.toLowerCase())!==null)
{Product.push(result.detail[i]);}
                    }
                    for(var j=0;j<Product.length;j++){
                    for(var i=0;i<result.url.length;i++){
                        if(result.url[i].idproduct==Product[j].idproduct)
 {index.push(result.url[i]);
}
                     }}
                    this.setState({
                        isLoaded: true,
                        product: Product,
                        url:index


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
            // var Product=[];
      
    //    this.setState({
    //        Product:Product
    //    })  
    }
    render() {
        const { match, history } = this.props;
        console.log(match.params.search)
        return (
            <div>
                <Header  />
               


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
                                            <ProductBox id={index.idproduct} name={index.nameproduct} price={index.price * 1000} url={this.state.url[key].urlimage} key={key} isNew={false} />
                                        ))}
{this.state.product.length===0&&<h4>Không tìm được sản phẩm phù hợp</h4>}

                                   
                        </div>
                    </div>

                </div>


                <NewestLetter />

                <Footer />
            </div >
        )
    }
}

export default search;