import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = (props) => {
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
    <div id="react-chrome-extension">
      <ul>
        <li>
          <a href="#">{props.count}</a>
          <a href="#" style={{marginLeft: 5}} onClick={onDecrease}>[ decrease ]</a>
          <a href="#" style={{marginLeft: 5}} onClick={onReset}>[ reset ]</a>
          <a href="#" style={{marginLeft: 5}} onClick={onIncrease}>[ increase ]</a>
        </li>
      </ul>
    </div>
  );
};
Content.propTypes = {
  count: PropTypes.number.isRequired,
  countReset: PropTypes.func.isRequired,
  countIncrease: PropTypes.func.isRequired,
  countDecrease: PropTypes.func.isRequired,
};
Content.defaultProps = {};

export default Content;
