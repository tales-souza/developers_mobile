/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './src/routes';


const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"  />
    <Routes />
    </>
  );
};



export default App;
