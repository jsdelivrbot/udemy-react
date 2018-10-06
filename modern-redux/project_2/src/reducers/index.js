import { combineReducers } from 'redux';
import weatherReducer from './weather_reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: weatherReducer
});

export default rootReducer;
