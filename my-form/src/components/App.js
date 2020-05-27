import React from 'react';
import '../App.css';
// import Home from './Home';
import DieuHuong from '../router/DieuHuong';
// import OldProduct from './oldProduct';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import NewProduct from './newProduct';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
    
        <DieuHuong></DieuHuong>
        {/* <OldProduct></OldProduct> */}
        {/* <NewProduct></NewProduct> */}
      </div>
      </Router>
    );
  }
}


export default App;
