import { aulasCalendarActionType } from "@/types/types";
const initialState = {
    datas: [
      { hour: '07:00', aulas: ['Funcional', 'Pilates', 'Funcional', 'Pilates', 'Funcional'] },
      { hour: '12:00', aulas: ['', '', '', '', ''] },
      { hour: '15:00', aulas: ['', 'Funcional', '', 'Funcional', ''] },
      { hour: '18:00', aulas: ['Funcional', 'Pilates', 'Funcional', 'Pilates', 'Funcional'] },
    ],
};

const aulasCalendarReducer = (state = initialState, action: aulasCalendarActionType) => {
    switch (action.type) {
        case "UPDATE_AULA":
            console.log({
                ...state,
                datas: state.datas.map((item) =>
                item.hour === action.payload.hour
                    ? { ...item, aulas: action.payload.aulas }
                    : item
                ),
            })
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
  