import { GET_MESSAGES } from '../constants/action_types';

let initState = {
  chatLogs: []
}

export default function tasks(state = initState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        chatLogs: action.payload
    };

    default:
      return state;
    }
}
