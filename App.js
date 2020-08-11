import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Main from './src/components/Main';
import Movies from './src/components/Movies';
import Images from './src/components/Images';

import configureStore from './src/store';
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Main />
        <Movies />
        <Images />
      </SafeAreaView>
    </Provider>
  );
}
