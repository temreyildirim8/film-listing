import * as ActionTypes from "./actionTypes";
import axios from 'axios';

export const searchAction = (searchTitle) => {
    return dispatch => {
      dispatch({ type: ActionTypes.SEARCH_START });

      axios.post('http://www.omdbapi.com/?s='+searchTitle+'&plot=full&apikey=cb5b808b')
      .then(response => {
        let newObj = JSON.parse(JSON.stringify(response.data));
        dispatch({ type: ActionTypes.SEARCH_SUCCESS, rowData: newObj });

      })

    }
}