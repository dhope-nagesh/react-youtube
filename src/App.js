import React from 'react';
import YoutubeApp from './containers/youtubeApp/youtubeApp';
import youtubeAppCombainedReducer from './containers';

import { Provider } from 'react-redux'; 

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  youtubeAppCombainedReducer,
  applyMiddleware(thunk)
  );


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <YoutubeApp />
      </Provider>
    );
  }
}

