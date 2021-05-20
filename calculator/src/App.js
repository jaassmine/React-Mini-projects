import React, { Component } from 'react' ;
// import React-DOM from "react-dom" ;
import "./App.css";
import Button from './components/Button' ;
import Input from './components/Input' ;
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs' ;


class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      input:""
    }
  }

  addtoInput = val => {
    this.setState({input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input) }) ;
  };

  render() {
  return (
    <div className="App">
      <div className = "calc-wrapper">
        <Input input = {this.state.input}></Input>
        <div className = "row">
          <Button handleClick = {this.addtoInput}>7</Button>
          <Button handleClick = {this.addtoInput}>8</Button>
          <Button handleClick = {this.addtoInput}>9</Button>
          <Button handleClick = {this.addtoInput}>/</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addtoInput}>4</Button>
          <Button handleClick = {this.addtoInput}>5</Button>
          <Button handleClick = {this.addtoInput}>6</Button>
          <Button handleClick = {this.addtoInput}>*</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addtoInput}>1</Button>
          <Button handleClick = {this.addtoInput}>2</Button>
          <Button handleClick = {this.addtoInput}>3</Button>
          <Button handleClick = {this.addtoInput}>+</Button>
        </div>
        <div className = "row">
          <Button handleClick = {this.addtoInput}>.</Button>
          <Button handleClick = {this.addtoInput}>0</Button>
          <Button handleClick = {() => this.handleEqual() }>=</Button>
          <Button handleClick = {this.addtoInput}>-</Button>
        </div>
        <div className= "row">
          <ClearButton handleClear = {() => this.setState({input: ""})}> Clr </ClearButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
