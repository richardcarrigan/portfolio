'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this.state = {
      displayedVal: 0,
      currentOp: '',
      result: 0,
      lastBtn: '',
      isDecimal: false
    };

    _this.updateVal = _this.updateVal.bind(_this);
    _this.clearVal = _this.clearVal.bind(_this);
    _this.calculate = _this.calculate.bind(_this);
    return _this;
  }

  _createClass(Calculator, [{
    key: 'updateVal',
    value: function updateVal(event) {
      var _this2 = this;

      var opsRegEx = /[\+\-x\/]/;
      var btn = event.target.innerHTML;
      switch (btn) {
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
          if (this.state.displayedVal == 0 || opsRegEx.test(this.state.lastBtn)) {
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
          if (!this.state.isDecimal) {
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
          if (this.state.result === 0) {
            this.setState({
              result: this.state.displayedVal
            });
          } else if (!opsRegEx.test(this.state.lastBtn)) {
            var calcResult = this.calculate();
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
          if (this.state.currentOp !== '') {
            this.setState({
              result: this.calculate()
            }, function () {
              _this2.setState({
                displayedVal: _this2.state.result
              });
            });
          }
          this.setState({
            lastBtn: btn
          });
          break;
      }
    }
  }, {
    key: 'clearVal',
    value: function clearVal() {
      this.setState({
        displayedVal: 0,
        currentOp: '',
        result: 0,
        lastBtn: '',
        isDecimal: false
      });
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      var result = Number(this.state.result);
      var displayedVal = Number(this.state.displayedVal);
      switch (this.state.currentOp) {
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
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'calculator' },
        React.createElement(Display, { displayedVal: this.state.displayedVal }),
        React.createElement(Keypad, { updateVal: this.updateVal, clearVal: this.clearVal })
      );
    }
  }]);

  return Calculator;
}(React.Component);

var Display = function (_React$Component2) {
  _inherits(Display, _React$Component2);

  function Display(props) {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));
  }

  _createClass(Display, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'display' },
        this.props.displayedVal
      );
    }
  }]);

  return Display;
}(React.Component);

var Keypad = function (_React$Component3) {
  _inherits(Keypad, _React$Component3);

  function Keypad(props) {
    _classCallCheck(this, Keypad);

    return _possibleConstructorReturn(this, (Keypad.__proto__ || Object.getPrototypeOf(Keypad)).call(this, props));
  }

  _createClass(Keypad, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'keypad' },
        React.createElement(
          'button',
          { id: 'one', onClick: this.props.updateVal },
          '1'
        ),
        React.createElement(
          'button',
          { id: 'two', onClick: this.props.updateVal },
          '2'
        ),
        React.createElement(
          'button',
          { id: 'three', onClick: this.props.updateVal },
          '3'
        ),
        React.createElement(
          'button',
          { id: 'four', onClick: this.props.updateVal },
          '4'
        ),
        React.createElement(
          'button',
          { id: 'five', onClick: this.props.updateVal },
          '5'
        ),
        React.createElement(
          'button',
          { id: 'six', onClick: this.props.updateVal },
          '6'
        ),
        React.createElement(
          'button',
          { id: 'seven', onClick: this.props.updateVal },
          '7'
        ),
        React.createElement(
          'button',
          { id: 'eight', onClick: this.props.updateVal },
          '8'
        ),
        React.createElement(
          'button',
          { id: 'nine', onClick: this.props.updateVal },
          '9'
        ),
        React.createElement(
          'button',
          { id: 'equals', onClick: this.props.updateVal },
          '='
        ),
        React.createElement(
          'button',
          { id: 'zero', onClick: this.props.updateVal },
          '0'
        ),
        React.createElement(
          'button',
          { id: 'add', onClick: this.props.updateVal },
          '+'
        ),
        React.createElement(
          'button',
          { id: 'subtract', onClick: this.props.updateVal },
          '-'
        ),
        React.createElement(
          'button',
          { id: 'multiply', onClick: this.props.updateVal },
          'x'
        ),
        React.createElement(
          'button',
          { id: 'divide', onClick: this.props.updateVal },
          '/'
        ),
        React.createElement(
          'button',
          { id: 'decimal', onClick: this.props.updateVal },
          '.'
        ),
        React.createElement(
          'button',
          { id: 'clear', onClick: this.props.clearVal },
          'CLEAR'
        )
      );
    }
  }]);

  return Keypad;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('reactApp'));