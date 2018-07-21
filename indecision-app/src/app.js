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
  render() {
    const options = ['One']

    return (
      <div>
        <Header
          title='Indecision App'
          subtitle='asdsadas'
        />
        <Action />
        <Options options={options}/>
        <AddOption />
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
        <button>What should I Do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.options.map((option,key) => (
            <Option
              text={option}
              key={key}
             />
         ))
        }
      </ul>
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
        Add
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
