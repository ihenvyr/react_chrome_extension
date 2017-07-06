import React from 'react';
import PropTypes from 'prop-types';
import './Options.scss';

class Options extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    countReset: PropTypes.func.isRequired,
    countIncrease: PropTypes.func.isRequired,
    countDecrease: PropTypes.func.isRequired
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
