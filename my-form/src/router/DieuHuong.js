import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import OldProduct from '../components/oldProduct';
import Home from '../components/Home';
import NewProduct from '../components/newProduct';

class DieuHuong extends Component {
    render() {
        return (
                
                    <div>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/old" component={OldProduct} />
                        <Route exact path="/new" component={NewProduct} />
                        
                    </div>
            
        );
    }
}

export default DieuHuong;