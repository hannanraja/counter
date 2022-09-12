import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

class App extends React.Component {
    constructor() {
      super();
      this.state = {count:0};
    }
    
    increment = (count)=>{
this.setState({count : this.state.count+1});
    }
    decrement = ()=>{
      (this.state.count> 0 && this.setState({count :this.state.count-1}) )
    
          }
          render() {
            return (
              <div
              style={{marginTop: "20vh"}}>
                 <h1>React Simple Counter App </h1>
            
              <div className='centeralign'>
               
                <button
            onClick={this.decrement}
            className="btn" >
              -
            </button>
            <h2>Count : {this.state.count} </h2>
            <button
            onClick={this.increment}
            className="btn" >
              +
            </button>
            
            </div>
            </div>
            )
          }
  }
  export default App;