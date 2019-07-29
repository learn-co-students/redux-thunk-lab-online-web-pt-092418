import { combineReducers } from 'redux';
import catsReducer from './cats_reducer'


const rootReducer = combineReducers({
  catsReducer
})

export default rootReducer;




// // TC's syntax without combine reducer
// import { combineReducers } from 'redux';
// import catsReducer from './cats_reducer'
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware } from 'redux';
//
// export const configureStore = () => {
//   return createStore(catsReducer, applyMiddleware(thunk))
// }
//
// export const rootReducer = combineReducers({
//   catsReducer
// })
