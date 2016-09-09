import React from 'react';

class Popup extends React.Component {
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
      <div style={{ width: 120 }}>
        <p style={{ textAlign: 'center', fontSize: 21, margin: 0 }}>
          <strong>{this.props.count}</strong>
        </p>
        <p style={{ textAlign: 'center' }}>
          <button type="button" onClick={this.countDecrease}> - </button>
          <button type="button" onClick={this.countReset}> reset </button>
          <button type="button" onClick={this.countIncrease}> + </button>
        </p>
      </div>
    );
  }
}

export default Popup;
