import { combineReducers } from 'redux';
import aulasCalendarReducer from './aulasCalendarReducer';
import treinamentosReducer from './treinamentosReducer';

const rootReducer = combineReducers({
  aulas: aulasCalendarReducer,
  treinamentos: treinamentosReducer,
});

export default rootReducer;
