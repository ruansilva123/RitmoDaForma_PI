import { combineReducers } from 'redux';
import aulasCalendarReducer from './aulasCalendarReducer';

const rootReducer = combineReducers({
  aulas: aulasCalendarReducer,
});

export default rootReducer;
