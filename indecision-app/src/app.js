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
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: ['Start Option']
    }
  }

  handleDeleteOptions() {
    this.setState(prev => {
      return { options : [] }
    })
  }

  handlePick() {
    const option = Math.floor(Math.random() * this.state.options.length)

    console.log(this.state.options[option])
  }

  handleAddOption(e) {
    e.preventDefault()
    const optionRef = e.target.elements.option,
      optionValue = optionRef.value.trim()

    if(!optionValue) return

    if(this.state.options.includes(optionValue)) {
      console.error('This option already exists')
      return
    }

    this.setState( (prev) => ({ options : prev.options.concat(optionValue) }))
    optionRef.value = ''
  }

  render() {
    return (
      <div>
        <Header
          title='Indecision App'
          subtitle='asdsadas'
        />
        <Action
          hasOptions={!!this.state.options.length}
          handlePick={this.handlePick.bind(this)}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions.bind(this)}
        />
        <AddOption
          handleAddOption={this.handleAddOption.bind(this)}
        />
      </div>
    )
  }
}

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <h2 className="subtitle">{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I Do
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleDeleteOptions}
        >
          Remove All
        </button>
        <ul>
          { this.props.options.map((option,key) => <Option text={option} key={key} />) }
        </ul>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" placeholder="Type your option here!"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
