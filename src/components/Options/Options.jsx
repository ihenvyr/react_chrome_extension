import React from 'react';
import PropTypes from 'prop-types';
import './Options.scss';

const Options = (props) => {
  const onDecrease = (event) => {
    event.preventDefault();
    props.countDecrease();
  };

  const onIncrease = (event) => {
    event.preventDefault();
    props.countIncrease();
  };

  const onReset = (event) => {
    event.preventDefault();
    props.countReset();
  };

  return (
    <ul className="Options-container">
      <li><strong>{props.count}</strong></li>
      <li>
        <a href="#" style={{marginLeft: 5}} onClick={onDecrease}>[ decrease ]</a>
        <a href="#" style={{marginLeft: 5}} onClick={onReset}>[ reset ]</a>
        <a href="#" style={{marginLeft: 5}} onClick={onIncrease}>[ increase ]</a>
      </li>
    </ul>
  );
};

Options.propTypes = {
  count: PropTypes.number.isRequired,
  countReset: PropTypes.func.isRequired,
  countIncrease: PropTypes.func.isRequired,
  countDecrease: PropTypes.func.isRequired
};

export default Options;
