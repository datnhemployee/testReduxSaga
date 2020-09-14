import React, {Component} from 'react';
// mobx
import {Provider} from 'react-redux';
// screens
import LogIn from './src/screens/login/index.redux';
// saga
import saga from './src/stores/store.saga';
import rootSaga from './src/saga';

const {sagaMiddleware, store} = saga;

sagaMiddleware.run(rootSaga);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <LogIn />
      </Provider>
    );
  }
}

export default App;
