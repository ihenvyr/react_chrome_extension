import React from 'react';
import './App.scss';

class App extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};

  // componentWillMount() {}

  // componentWillUnmount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  addCount = () => {
    this.props.addCount();
  };

  addCountAsync = () => {
    this.props.addCountAsync();
  };

  render() {
    return (
      <div id="react-chrome-extension">
        <ul>
          <li>
            <a href="javascript:">{this.props.count}</a>
            <a href="javascript:" style={{marginLeft: 5}} onClick={this.addCount}>[add count]</a>
            <a href="javascript:" style={{marginLeft: 5}} onClick={this.addCountAsync}>[add count (async)]</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
