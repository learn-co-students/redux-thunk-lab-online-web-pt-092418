import fetch from 'isomorphic-fetch';

export function fetchCats(){
    return (dispatch => {
        dispatch({type: 'LOADING_CATS'});
        return fetch("http://localhost:4000")
        .then(response => response.json())
        .then(cats => dispatch({type: 'FETCH_CATS', pictures: cats}))
    })
}
