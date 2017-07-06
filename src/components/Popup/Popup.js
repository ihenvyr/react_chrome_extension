import React from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';

class Popup extends React.Component {
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
      <div className="Popup-container">
        <p className="Popup-count">
          <strong>{this.props.count}</strong>
        </p>
        <p className="Popup-button-container">
          <button type="button" onClick={this.countDecrease}> - </button>
          <button type="button" onClick={this.countReset}> reset </button>
          <button type="button" onClick={this.countIncrease}> + </button>
        </p>
      </div>
    );
  }
}

export default Popup;
