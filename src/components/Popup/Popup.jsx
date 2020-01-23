import React from 'react';
import PropTypes from 'prop-types';
import './Popup.scss';

const Popup = (props) => {
  return (
    <div className="Popup-container">
      <p className="Popup-count">
        <strong>{props.count}</strong>
      </p>
      <p className="Popup-button-container">
        <button type="button" onClick={props.countDecrease}> - </button>
        <button type="button" onClick={props.countReset}> reset </button>
        <button type="button" onClick={props.countIncrease}> + </button>
      </p>
    </div>
  );
};

Popup.propTypes = {
  count: PropTypes.number.isRequired,
  countReset: PropTypes.func.isRequired,
  countIncrease: PropTypes.func.isRequired,
  countDecrease: PropTypes.func.isRequired
};

export default Popup;
