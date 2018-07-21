'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log("App.js");

// -----------------------------------------------------------
// const multiplier = {
//   numbers : [2,4,5,10],
//   multiplyBy : 4,
//   multiply() {
//     return this.numbers.map( number => number * this.multiplyBy);
//   }
// }
// console.log(multiplier.multiply());
// -----------------------------------------------------------

// const app = {
//   options : []
// }
//
// const onFormSubmit = (e) => {
//   e.preventDefault()
//
//   const option = e.target.elements.option.value
//
//   if (option) {
//     app.options.push(option)
//
//     e.target.elements.option.value = ''
//     renderApp()
//   }
// }
//
// const onRemoveAllOptions = () => {
//   app.options = []
//   renderApp()
// }
//
// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNum]
//   alert(option)
// }
//
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>
//         {app.options.length > 0 ? 'Here are your options' : 'No options'}
//       </p>
//       <ol>
//         {app.options.map( (option,key) => <li key={key}>{option}</li>)}
//       </ol>
//       <button disabled={app.options.length < 0} onClick={onMakeDecision}>What Should I Do?</button>
//       <button disabled={app.options.length < 0} onClick={onRemoveAllOptions}>Remove All</button>
//
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   )
//   const root = document.getElementById('app')
//   ReactDOM.render(template, root)
// }
//
// renderApp()

// -----------------------------------------------------------
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: ['Start Option']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function (prev) {
        return { options: [] };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var option = Math.floor(Math.random() * this.state.options.length);

      console.log(this.state.options[option]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var optionRef = e.target.elements.option,
          optionValue = optionRef.value.trim();

      if (!optionValue) return;

      if (this.state.options.includes(optionValue)) {
        console.error('This option already exists');
        return;
      }

      this.setState(function (prev) {
        return { options: prev.options.concat(optionValue) };
      });
      optionRef.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, {
          title: 'Indecision App',
          subtitle: 'asdsadas'
        }),
        React.createElement(Action, {
          hasOptions: !!this.state.options.length,
          handlePick: this.handlePick.bind(this)
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions.bind(this)
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption.bind(this)
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'title' },
          this.props.title
        ),
        React.createElement(
          'h2',
          { className: 'subtitle' },
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          'What should I Do'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handleDeleteOptions
          },
          'Remove All'
        ),
        React.createElement(
          'ul',
          null,
          this.props.options.map(function (option, key) {
            return React.createElement(Option, { text: option, key: key });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.text
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.props.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option', placeholder: 'Type your option here!' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
