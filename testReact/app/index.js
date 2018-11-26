import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}


App.PropTypes = {
  name: React.PropTypes.String,
}

App.defaultProps = {
  name: 'Howard yu yu yu',
}

ReactDOM.render(<App />, document.getElementById('app'));

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0,
    }
  }
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('time'));

const TodoList = (props) => (
  <ul>
    { 
      props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
)

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items: [],
			text: '',
		}
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
      e.preventDefault();
      const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
      const nextText = '';
      this.setState({items: nextItems, text: nextText});
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('todo'));
