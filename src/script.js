'use strict';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayedVal: 0,
      currentOp: '',
      result: 0,
      lastBtn: '',
      isDecimal: false
    }
    
    this.updateVal = this.updateVal.bind(this);
    this.clearVal = this.clearVal.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  updateVal(event) {
    let opsRegEx = /[\+\-x\/]/;
    let btn = event.target.innerHTML;
    switch(btn) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if(this.state.displayedVal == 0 || opsRegEx.test(this.state.lastBtn)) {
          this.setState({
            displayedVal: btn,
            isDecimal: false
          });
        } else {
          this.setState({
            displayedVal: this.state.displayedVal + btn
          });
        }
        this.setState({
          lastBtn: btn
        });
        break;
      case '.':
        if(!this.state.isDecimal) {
          this.setState({
            displayedVal: this.state.displayedVal + btn,
            isDecimal: true,
            lastBtn: btn
          });
        }
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        if(this.state.result === 0) {
          this.setState({
            result: this.state.displayedVal
          });
        } else if(!opsRegEx.test(this.state.lastBtn)) {
          let calcResult = this.calculate();
          this.setState({
            displayedVal: calcResult,
            result: calcResult
          });
        }
        this.setState({
          lastBtn: btn,
          currentOp: btn
        });
        break;
      case '=':
        if(this.state.currentOp !== '') {
          this.setState({
            result: this.calculate()
          }, () => {
            this.setState({
              displayedVal: this.state.result
            });
          });
        }
        this.setState({
          lastBtn: btn
        });
        break;
    }
  }
  
  clearVal() {
    this.setState({
      displayedVal: 0,
      currentOp: '',
      result: 0,
      lastBtn: '',
      isDecimal: false
    });
  }
  
  calculate() {
    let result = Number(this.state.result);
    let displayedVal = Number(this.state.displayedVal);
    switch(this.state.currentOp) {
      case '+':
        result += displayedVal;
        break;
      case '-':
        result -= displayedVal;
        break;
      case 'x':
        result *= displayedVal;
        break;
      case '/':
        result /= displayedVal;
        break;
    }
    this.setState({
      currentOp: ''
    });
    return result;
  }
  
  render() {
    return (
      <div id="calculator">
        <Display displayedVal={this.state.displayedVal}/>
        <Keypad updateVal={this.updateVal} clearVal={this.clearVal}/>
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div id="display">{this.props.displayedVal}</div>;
  }
}

class Keypad extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div id="keypad">
      <button id="one" onClick={this.props.updateVal}>1</button>
      <button id="two" onClick={this.props.updateVal}>2</button>
      <button id="three" onClick={this.props.updateVal}>3</button>
      <button id="four" onClick={this.props.updateVal}>4</button>
      <button id="five" onClick={this.props.updateVal}>5</button>
      <button id="six" onClick={this.props.updateVal}>6</button>
      <button id="seven" onClick={this.props.updateVal}>7</button>
      <button id="eight" onClick={this.props.updateVal}>8</button>
      <button id="nine" onClick={this.props.updateVal}>9</button>
      <button id="equals" onClick={this.props.updateVal}>=</button>
      <button id="zero" onClick={this.props.updateVal}>0</button>
      <button id="add" onClick={this.props.updateVal}>+</button>
      <button id="subtract" onClick={this.props.updateVal}>-</button>
      <button id="multiply" onClick={this.props.updateVal}>x</button>
      <button id="divide" onClick={this.props.updateVal}>/</button>
      <button id="decimal" onClick={this.props.updateVal}>.</button>
      <button id="clear" onClick={this.props.clearVal}>CLEAR</button>
    </div>
    )    
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('reactApp')
);
