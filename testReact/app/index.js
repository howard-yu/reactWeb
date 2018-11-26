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