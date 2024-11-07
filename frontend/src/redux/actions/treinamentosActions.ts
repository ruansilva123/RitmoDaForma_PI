export const addVideoTreinamento = (title: string, desc: string, image: string, video: string) => ({
    type: 'CREATE_TREINAMENTO',
    payload: { title, desc, image, video },
});