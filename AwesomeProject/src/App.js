import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Home from './Router/MainRouter';
//import Router from './Router';
//import Router from './Router/BikeInsuranceRouter';
//import Router from './Router/CarInsuranceRouter';
//import Router from './Router/HomeInsuranceRouter';

const store = configureStore();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
      <Home />
      </Provider>
    );
  }
}
