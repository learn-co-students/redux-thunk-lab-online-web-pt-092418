// Define your catsReducer in src/reducers/cats_reducer.
// Your catsReducer should respond to two actions with types of
// 'LOADING_CATS' and a 'FETCH_CATS' respectively.
///reducer///
  const initialState = {
    loading: false,
    pictures: []
  }

export default (state = initialState, action) => {

  switch (action.type) {

    case 'LOADING_CATS': {
      return {...state, loading: true};
    }

    case 'FETCH_CATS': {
      return {...state, loading: false, pictures: action.payload};
      // return state.concat(action.images);
    }

    default:
      return state;
  }
};
