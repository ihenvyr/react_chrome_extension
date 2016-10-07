import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Options from './Options';
import { countReset, countIncrease, countDecrease } from '../../actions';

const OptionsContainer = (props) => {
  return <Options {...props} />;
};

const mapStateToProps = (state) => {
  return {
    count: state.count || 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countReset, countIncrease, countDecrease }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
