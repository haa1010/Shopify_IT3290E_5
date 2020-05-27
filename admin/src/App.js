import React from 'react';
import './App.css';
import Graph from "./Component/Graph";
import Storage from './Component/Storage';
import OrderbyDay from './Component/OrderbyDay'
// import {Bar} from 'react-chartjs-2';


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }




class App extends React.Component{
  render(){
    return (
      <div> 
        <Graph></Graph>
        <div className="Container">
          <OrderbyDay></OrderbyDay>
          <Storage></Storage>
        </div>
      </div>
    )
  }
}

export default App;
