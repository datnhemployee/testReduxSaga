import {NativeModules} from 'react-native';
import View from './view.redux';
import {connect} from 'react-redux';

class LogIn extends View {
  constructor(props) {
    super(props);
  }

  onPressButton = () => {
    const {
      props: {login},
    } = this;
    const username = new Date().getTime();
    const password = 'abcd';
    login({username, password});
  };
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  const {SIGN_IN} = require('../../actions/logIn');
  return {
    login: (data) => dispatch({type: SIGN_IN, payload: data}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
