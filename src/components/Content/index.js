import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Content from './Content';
import { countReset, countIncrease, countDecrease } from '../../actions';

const ContentContainer = (props) => {
  return <Content {...props} />;
};

const mapStateToProps = (state) => {
  return {
    count: state.count || 0 // for some reason, state is an empty object {} on component init
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countReset, countIncrease, countDecrease }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
