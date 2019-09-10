// import { bindActionCreators } from "redux";
//  import fetchCats from './catActions';

export default function catsReducer(state = {
    loading: false, 
    pictures: []}, action) {
        switch(action.type){
            case 'LOADING_CATS':{
                return {
                    ...state, loading: true
                }
            }
                
            case 'FETCH_CATS': {
                return{
                    ...state,
                    loading: false,
                    pictures: action.payload
                }
            }
              default:{
                  return state;  
              }
        }
    }


