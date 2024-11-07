import React from "react";
import * as S from "./ModalTreinamentosViewStyles";
import CloseIcon from "@/components/admin/Modal/CloseIcon/CloseIcon";
import { treinamentosType } from "@/types/types";

interface ModalProps {
    closeModal: () => void,
    content: treinamentosType,
}

const ModalTreinamentosView: React.FC<ModalProps> = ({closeModal, content}) =>{
    return(
        <S.ContainerPopUp>
            <S.BackgroundPopup>
                <S.ModalContainer>
                    <CloseIcon closeModal={() => closeModal()}/>
                    <S.ContentModal>
                        <S.Video></S.Video>
                        <S.TitleModal>{content?.title}</S.TitleModal>
                        <S.RedLine/>
                        <S.DescriptionModal>
                            {content?.description}
                        </S.DescriptionModal>
                    </S.ContentModal>
                </S.ModalContainer>
            </S.BackgroundPopup>
            <S.BackgroundBlur onClick={() => closeModal()}/>
        </S.ContainerPopUp>
    )
}

export default ModalTreinamentosView