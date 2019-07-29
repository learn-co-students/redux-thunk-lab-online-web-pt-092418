import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);




// // TC syntax
// import React from 'react';
// import ReactDOM from 'react-dom'
// import App from './App'
// import { Provider } from 'react-redux'
//
// import { configureStore } from './reducers/index.js'
//
//
// const store=configureStore()
// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
// );
