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
    content: {video: "", title: "",desc: ""}, 
    openModal: (currentModal: React.ReactNode) => {}, 
    closeModal: () => {}
});

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState<React.ReactNode>(<></>);

    const openModal = (selectedModal: React.ReactNode) => {
        setIsOpen(true);
        setCurrentModal(selectedModal)
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <modalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            {
                isOpen && 
                <S.ContainerPopUp>
                        <S.BackgroundPopup>
                            {currentModal}
                        </S.BackgroundPopup>    
                    <S.BackgroundBlur onClick={() => closeModal()}>
                    </S.BackgroundBlur>
                </S.ContainerPopUp>
                
            }
        </modalContext.Provider>
    )
}

export const useModal = () => {
    return useContext(modalContext);
}
