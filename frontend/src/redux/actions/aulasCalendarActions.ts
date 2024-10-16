export const updateAulaCalendar = (time: string, aulas: string[]) => ({
    type: 'UPDATE_AULA',
    payload: { time, aulas },
});