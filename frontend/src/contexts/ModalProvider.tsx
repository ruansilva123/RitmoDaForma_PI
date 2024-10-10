import {createContext, useContext, useState} from "react";
import Modal from "../components/Treinamentos/Modal/Modal";

import { contextReturModal, contentModal } from "../types/types";

interface ModalProviderProps {
    children: React.ReactNode
}

const modalContext = createContext<contextReturModal>({
    isOpen: false, 
    content: {video: "", title: "",desc: ""}, 
    openModal: () => {}, 
    closeModal: () => {}
});

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<contentModal | null>(null);

    const openModal = (newContent: contentModal) => {
        setIsOpen(true);
        setContent(newContent);
    }

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
    }

    return (
        <modalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
            {children}
            {
                isOpen && 
                <Modal content={content} closeModal={closeModal} />
            }
        </modalContext.Provider>
    )
}

export const useModal = () => {
    return useContext(modalContext);
}
