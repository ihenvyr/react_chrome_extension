import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

class Content extends React.Component {
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
      <div id="react-chrome-extension">
        <ul>
          <li>
            <a href="javascript:">{this.props.count}</a>
            <a href="javascript:" style={{marginLeft: 5}} onClick={this.countDecrease}>[ decrease ]</a>
            <a href="javascript:" style={{marginLeft: 5}} onClick={this.countReset}>[ reset ]</a>
            <a href="javascript:" style={{marginLeft: 5}} onClick={this.countIncrease}>[ increase ]</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Content;
