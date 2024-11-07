// Libs
import React, {createContext, useContext, useState} from "react";

// Components
import * as S from "./ModalProviderStyles";

// Types
import { contextReturModal } from "../types/types";


interface ModalProviderProps {
    children: React.ReactNode
}

const modalContext = createContext<contextReturModal>({
    isOpen: false,
    openModal: () => {}, 
    closeModal: () => {}
});

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState<React.ReactNode>(<></>);

    const openModal: (currentModal: React.ReactNode) => void = (selectedModal: React.ReactNode) => {
        setIsOpen(true);
        setCurrentModal(selectedModal)
    }

    const closeModal: () => void = () => {
        setIsOpen(false);
    }

    return (
        <modalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            {
                isOpen && 
                <>
                    {currentModal}    
                </>
            }
        </modalContext.Provider>
    )
}

export const useModal = () => {
    return useContext(modalContext);
}
