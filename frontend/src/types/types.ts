export type contentModal = {
    video: string, 
    title: string,
    desc: string
}

export type contextReturModal = {
    isOpen: boolean, 
    content: contentModal | null, 
    openModal: (newContent: contentModal) => void, 
    closeModal: () => void
}