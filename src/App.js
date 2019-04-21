import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC3tlY83AddAmYcvblGfmCuEdPKZ18TzwA",
      authDomain: "reservaturnos-cdc8a.firebaseapp.com",
      databaseURL: "https://reservaturnos-cdc8a.firebaseio.com",
      projectId: "reservaturnos-cdc8a",
      storageBucket: "reservaturnos-cdc8a.appspot.com",
      messagingSenderId: "565297411849"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
