import React from "react";
import * as S from "./ModalEditTreinamentoStyles";

interface ModalProps {
    closeModal: () => void;
    content: {
        video: string, 
        title: string,
        desc: string
    },
}

const ModalEditTreinamento: React.FC<ModalProps> = ({closeModal, content}) =>{
    return(
        <S.ModalContainer>
            <S.CloseIcon onClick={() => closeModal()}/>
            <S.ContentModal>
                <S.Video></S.Video>
                <S.TitleModal>{content?.title}</S.TitleModal>
                <S.RedLine/>
                <S.DescriptionModal>
                    {content?.desc}
                </S.DescriptionModal>
            </S.ContentModal>
        </S.ModalContainer>
    )
}

export default ModalEditTreinamento