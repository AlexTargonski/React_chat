import axios                from 'axios';
import { API_SESSIONS_URL } from '../constants/api';
import { browserHistory } from 'react-router';
import { locations } from '../components/locations';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})

export function Login(session){
  return function(dispatch, getState) {
    let body = { session: session }

    axios.post(`${API_SESSIONS_URL}`, body, { headers: HEADERS })

    .then(res => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);

        locations({
          url: '/'
        })(dispatch);

        browserHistory.push('/');
        // location.reload();
      }
      else {
        console.log("draste")
      }
    })
    .catch(e => {
      console.error("error: ", e);
    })

  }
}
