import axios from 'axios';
import * as actionType from '../constants/ActionTypes';

function requestMenu() {
    return {
        type: actionType.REQUEST_MENU
    }
}
  
function receiveMenu(courses) {
    return {
        type: actionType.RECEIVE_MENU,
        courses
    }
}

export function fetchMenu(url) {
	return (dispatch) => {
		dispatch(requestMenu());
		return axios.get(url)
            .then((response) => dispatch(receiveMenu(response.data)))
	}
}