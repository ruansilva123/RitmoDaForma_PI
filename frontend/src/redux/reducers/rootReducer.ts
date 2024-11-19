import { combineReducers } from 'redux';
import aulasCalendarReducer from './aulasCalendarReducer';
import treinamentosReducer from './treinamentosReducer';
import priceAulasTableReducer from './priceAulasTableReducer';

const rootReducer = combineReducers({
  aulas: aulasCalendarReducer,
  treinamentos: treinamentosReducer,
  aulasPrice: priceAulasTableReducer,
});

export default rootReducer;
