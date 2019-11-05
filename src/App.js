import React, {Component} from 'react';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import './App.css';



class App extends Component  {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val})
  };

  addZeroToInput = val => {
    if(this.state.input){
      this.setState({input: this.state.input + val});
    }
  };

  addDecimal = val => {
    // Only add decimal if there is no decimal point yet in the input data.
    if(this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input + val});
    }
  };

  operator = (val) => {
    this.state.previousNumber = this.state.input;
    this.setState({input: "", operator: val})
  }

  clearInput = () => {
    this.setState({
      input: "", 
      operator: "", 
      previousNumber:"", 
      currentNumber:""
    })
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator === "+"){
      this.setState({
        input: parseInt(this.state.previousNumber) + 
        parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator === "-"){
      this.setState({
        input: parseInt(this.state.previousNumber) -
        parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator === "*"){
      this.setState({
        input: parseInt(this.state.previousNumber) *
        parseInt(this.state.currentNumber)
      })
    }
    else if (this.state.operator === "/"){
      this.setState({
        input: parseInt(this.state.previousNumber) /
        parseInt(this.state.currentNumber)
      })
    }
  }

  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="Row">
          <Input>{this.state.input}</Input>
        </div>
        <div className="Row">
          <Button 
            handleClick={this.addToInput}
          >7
          </Button>
          <Button 
            handleClick={this.addToInput}
          >8
          </Button>
          <Button 
            handleClick={this.addToInput}
          >9
          </Button>
          <Button 
            handleClick={this.operator}
          >/
          </Button>
        </div>
        <div className="Row">
          <Button 
            handleClick={this.addToInput}
          >4
          </Button>
          <Button 
            handleClick={this.addToInput}
          >5
          </Button>
          <Button 
            handleClick={this.addToInput}
          >6
          </Button>
          <Button 
            handleClick={this.operator}
          >*
          </Button>
        </div>
        <div className="Row">
          <Button 
            handleClick={this.addToInput}
          >1
          </Button>
          <Button 
            handleClick={this.addToInput}
          >2
          </Button>
          <Button 
            handleClick={this.addToInput}
          >3
          </Button>
          <Button 
            handleClick={this.operator}
          >+
          </Button>
        </div>
        <div className="Row">
          <Button 
            handleClick={this.addDecimal}
          >.
          </Button>
          <Button 
            handleClick={this.addZeroToInput}
          >0
          </Button>
          <Button 
            handleClick={this.evaluate}
          >=
          </Button>
          <Button 
            handleClick={this.operator}
          >-
          </Button>
        </div>
        <div className="Row">
          <ClearButton
            handleClear={this.clearInput}
          >
           Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
