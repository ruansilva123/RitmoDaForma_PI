export const addVideoTreinamento = (title: string, desc: string, image: string, video: string) => ({
    type: 'CREATE_TREINAMENTO',
    payload: { title, desc, image, video },
});

export const searchEquipament = (term: string) => ({
    type: 'SEARCH_EQUIPAMENT',
    payload: term,
});