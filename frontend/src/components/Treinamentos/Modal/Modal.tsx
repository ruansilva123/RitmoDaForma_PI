import React from "react";
import * as S from "./ModalStyles";


interface ModalProps {
    closeModal: () => void;
    content: {
        video: string, 
        title: string,
        desc: string
    } | null,
}

const Modal: React.FC<ModalProps> = ({closeModal, content}) =>{
    return(
        <S.ContainerPopUp>
            <S.BackgroundPopup>
                <S.ModalContainer>
                    <S.CloseIcon onClick={() => closeModal()} />
                    <S.Video></S.Video>
                    <S.ContentModal>
                        <S.TitleModal>{content?.title}</S.TitleModal>
                        <S.RedLine/>
                        <S.DescriptionModal>
                            {content?.desc}
                        </S.DescriptionModal>
                    </S.ContentModal>
                </S.ModalContainer>
            </S.BackgroundPopup>
            
            <S.BackgroundBlur onClick={() => closeModal()} >
            </S.BackgroundBlur>
        </S.ContainerPopUp>
        
    )
}

export default Modal