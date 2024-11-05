import { aulasCalendarActionType } from "../../types/types";
const initialState = {
    datas: [
      { hour: '07:00', aulas: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
      { hour: '12:00', aulas: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
      { hour: '15:00', aulas: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
      { hour: '18:00', aulas: ['Funcional', 'Funcional', 'Funcional', 'Funcional', 'Funcional'] },
    ],
};

const aulasCalendarReducer = (state = initialState, action: aulasCalendarActionType) => {
    switch (action.type) {
        case "UPDATE_AULA":
            return {
                ...state,
                datas: state.datas.map((item) =>
                item.hour === action.payload.hour
                    ? { ...item, aulas: action.payload.aulas }
                    : item
                ),
            };
        case "CREATE_AULA":
            return {};
        default:
            return state;
    }
};

export default aulasCalendarReducer;
  