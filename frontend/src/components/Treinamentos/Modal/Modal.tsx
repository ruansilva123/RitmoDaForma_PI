import React from "react";
import * as S from "./ModalStyles";


interface ModalProps {
    openModal: () => void;
}

const Modal: React.FC<ModalProps> = ({openModal}) =>{
    return(
        <S.BackgroundBlur onClick={() => openModal()} >
            <S.ModalContainer>
                <S.CloseIcon/>
                <S.Video></S.Video>
                <S.ContentModal>
                    <S.TitleModal>Halteres</S.TitleModal>
                    <S.RedLine/>
                    <S.DescriptionModal>Lorem ipsum dolor sit amet, consect.  dolor sit amet, consecdolor. 
                        Lorem ipsum dolor sit amet, consect.  dolor sit amet, consecdolor. 
                        Lorem ipsum dolor sit amet, consect.  dolor sit amet, consecdolor. 
                        Lorem ipsum dolor sit amet, consect.  dolor sit amet, consecdolor. 
                        Lorem ipsum dolor sit amet, consect.  dolor sit amet, consecdolor.
                    </S.DescriptionModal>
                </S.ContentModal>
            </S.ModalContainer>
        </S.BackgroundBlur>
    )
}

export default Modal