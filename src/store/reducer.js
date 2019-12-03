import * as ActionTypes from "./actionTypes";
import { updateObject } from "./utility";

const INITIAL_STATE = {
  loading: false,
  searchData: [],
}

const searchSuccessful = (state, action) => {
  console.log(action.rowData.Search);
  return updateObject(state, INITIAL_STATE, {
  loading: false,
  searchData: action.rowData.Search,
  });
  
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ActionTypes.SEARCH_SUCCESS: return searchSuccessful(state, action);
    case ActionTypes.SEARCH_START: return updateObject(state, {}, { loading: true });
    default: return state;
  }
}

export default reducer;