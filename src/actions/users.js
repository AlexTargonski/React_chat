import axios from 'axios';
import { browserHistory } from 'react-router';
import { API_USERS_URL } from '../constants/api';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

export function signUp(user) {
  return function(dispatch, getState) {
    let body = { user: user }
    axios.post(`${API_USERS_URL}`, body, { headers: HEADERS })

    .then(res => {
        console.log("success")
      }
    )

    .catch(error => {
      console.log(error)
    })
  }
}

export function emailConfirmation(token) {
  return function(dispatch, getState) {
    let body = {user: token};
    axios.post(`${API_USERS_URL}/email_confirmation`, body, { headers: HEADERS })

    .then(res => {
      console.log(res.data)

    })

    .catch(error => {
      console.log(error)
    })
  }
}
