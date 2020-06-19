import React from 'react';
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './App.css';
import brand from './Component/brand/brand';
import cart from './Component/Cart/Cart';

import AuthAdmin from './Component/dasboad/AuthAdmin';
import home from './Component/home/home';
import login from './Component/login/LoginForm';
import Product from './Component/product/product';
import search from './Component/Search/search';
import './css/font-awesome.min.css';
import './css/nouislider.min.css';
import './css/slick.css';

import Store from './Component/admin/Storage'

import N from './Component/admin/newProduct'
import OldProduct from './Component/admin/oldProduct'
import Order from './Component/admin/OrderbyDay'
import Search from './Component/admin/Search'

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
         
          <Route path='/brand/:brand'  component={brand}></Route>
          <Route path='/cart' exact component={cart} ></Route>
          <Route path='/search/:search' component={search}/>
          <AuthAdmin exact path='/dashboard/store' component={Store}/>
                <AuthAdmin exact path='/dashboard/addNew' component={N}/>
                <AuthAdmin exact path='/dashboard/addOld' component={OldProduct}/>
                <AuthAdmin exact path='/dashboard' component={Order}/>
                
                <Route  path='/dashboard/search/:search' component={Search}/>
          

          </Switch>

      </Router>
    );
  }
}

export default withCookies(App);
