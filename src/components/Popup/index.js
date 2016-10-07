import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from './Popup';
import { countReset, countIncrease, countDecrease } from '../../actions';

const PopupContainer = (props) => {
  return <Popup {...props} />;
};

const mapStateToProps = (state) => {
  return {
    count: state.count || 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countReset, countIncrease, countDecrease }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
