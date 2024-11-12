export const updateAulaCalendar = (hour: string, aulas: string[]) => ({
    type: 'UPDATE_AULA',
    payload: { hour, aulas },
});