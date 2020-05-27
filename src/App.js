import React from 'react';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import home from './Component/home/home'
import Product from './Component/product/product'
import brand from './Component/brand/brand'
import cart from './Component/Cart/Cart'
import './css/slick.css'
import './App.css'
import login from './Component/login/LoginForm'
import Admin from './Component/dasboad/admin'
import './css/nouislider.min.css'
import './css/font-awesome.min.css'
import search from'./Component/Search/search'
import { withCookies} from 'react-cookie';
import Cookies from 'universal-cookie';




const cookies=new Cookies();


class App extends React.Component {

  constructor(props) {
    super(props);


  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={home}>
          </Route>
          <Route  path='/product/:id' component={Product}>

          </Route>
          <Route path='/admin' component={login}/>
          <Route exact path='/dasboad' component={Admin}/>
          <Route path='/brand/:brand'  component={brand}></Route>
          <Route path='/cart' exact component={cart} ></Route>
          <Route path='/search/:search' component={search}/>
          
         
          </Switch>

      </Router>
    );
  }
}

export default withCookies(App);
