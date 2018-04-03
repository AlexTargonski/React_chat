import axios from 'axios';
import { GET_MESSAGES } from '../constants/action_types';

const API_URL = `http://localhost:3001/messages`;
const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

export function getMessages() {
  return function(dispatch, getState) {
    axios.get(API_URL, { headers: headers })

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
