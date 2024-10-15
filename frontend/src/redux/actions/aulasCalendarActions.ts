    export const updateAulaCalendar = (horario: string, aulas: string[]) => ({
        type: 'UPDATE_AULA',
        payload: { horario, aulas },
    });