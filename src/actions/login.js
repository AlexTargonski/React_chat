import axios                from 'axios';
import { API_SESSIONS_URL } from '../constants/api';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})

export function Login(session) {
  return function(dispatch, getState) {
    let body = { session: session }
      axios.post(`${API_SESSIONS_URL}`, body, { headers: HEADERS }).then(res => {
        localStorage.setItem('token', res.data.token);
      }
    ).catch(error => {
      console.log(error)
    })
  }
}
