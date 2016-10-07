import React from 'react';
import './Options.scss';

class Options extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    countReset: React.PropTypes.func.isRequired,
    countIncrease: React.PropTypes.func.isRequired,
    countDecrease: React.PropTypes.func.isRequired
  };
  static defaultProps = {};
  state = {};

  // componentWillMount() {}

  // componentWillUnmount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  countReset = () => {
    this.props.countReset();
  };

  countIncrease = () => {
    this.props.countIncrease();
  };

  countDecrease = () => {
    this.props.countDecrease();
  };

  render() {
    return (
      <ul className="Options-container">
        <li><strong>{this.props.count}</strong></li>
        <li>
          <a href="javascript:" onClick={this.countDecrease}>[ decrease ]</a>
          <a href="javascript:" onClick={this.countReset}>[ reset ]</a>
          <a href="javascript:" onClick={this.countIncrease}>[ increase ]</a>
        </li>
      </ul>
    );
  }
}

export default Options;
