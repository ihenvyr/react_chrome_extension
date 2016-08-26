import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import { addCount, addCountAsync } from '../../actions';

const AppContainer = (props) => {
  return <App {...props} />;
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCount, addCountAsync }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
