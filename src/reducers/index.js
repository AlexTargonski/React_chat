import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import messages                from './messages';
import locations                from './locations';

export default combineReducers({
  routing: routerReducer,
  messages,
  locations,
})
