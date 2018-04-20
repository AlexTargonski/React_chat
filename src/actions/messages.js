import axios from 'axios';
import { GET_MESSAGES } from '../constants/action_types';
import { API_MESSAGES_URL } from '../constants/api';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

export function getMessages() {
  return function(dispatch, getState) {
    axios.get(API_MESSAGES_URL, { headers: headers })

    .then(res => {
      if (res.status === 200) {
        dispatch({ type: GET_MESSAGES, payload: res.data });
      }
    })
    .catch(e => {
      console.error("error: ", e);
    })
  }
}
