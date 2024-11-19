// Libs
import React, { useEffect, useState, ChangeEvent } from "react";

// Style
import * as S from "./ModalEditTreinamentoStyles";

// Contexts
import { useModal } from "@/contexts/ModalProvider";

// Components
import TitleModal from "../../Modal/TitleModal/TitleModal";
import CloseIcon from "../../Modal/CloseIcon/CloseIcon";
import InputModal from "../../Modal/InputModal/InputModal";
import ButtonModal from "../../Modal/ButtonModal/ButtonModal";

// Images
import imageUpload from "/assets/icons/image-upload.png";
import videoUpload from "/assets/icons/video-upload.png";

// Types
import { treinamentosType } from "@/types/types";

interface ModalProps {
    closeModal: () => void;
    content?: {
        title: string,
        description: string,
        imageEquipment: string,
        videoEquipment: string,
    },
}

const ModalEditTreinamento: React.FC<ModalProps> = ({closeModal, content}) =>{
    const { isOpen } = useModal();

    const [ formData, setFormData ] = useState<treinamentosType>({
        title: content ? content.title : "", 
        description: content ? content.description : "",
        imageEquipment: content  ? content.imageEquipment : "Escolha uma imagem",
        videoEquipment: content ? content.videoEquipment : "Escolha um vídeo"
    })

    const handleFormChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });  
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const { name } = event.target;

        setFormData({
            ...formData,
            [name]: file ? file.name : formData[name as keyof treinamentosType]
        });  
    };

    useEffect(() => {
        if(isOpen){
            window.addEventListener('scroll', lockScroll);
        }else{
            window.removeEventListener('scroll', lockScroll);
        }
    }, [isOpen])

    const lockScroll = () => {
        if(window.scrollY > 600){
            window.scrollTo(0, 600);
        }
    }

    const handleCloseModal = () => {
        window.removeEventListener('scroll', lockScroll);
        closeModal();
    }

    return(
        <S.ContainerPopUp>
            <S.BackgroundPopup>
                <S.ModalContainer>
                    <CloseIcon closeModal={() => handleCloseModal()} />
                    <S.ModalContent>
                        <TitleModal text="Adicionar Novo Treinamento"/>
                        <S.Description>
                            Preencha os dados abaixo para criar um novo vídeo de treinamento.
                        </S.Description>
                        <S.FormModal>
                            <S.UploadInputLabel htmlFor="videoEquipment">
                                <S.IconUpload src={videoUpload} alt="Vídeo upload" />
                                <S.UploadVideo 
                                    type="text" 
                                    id="videoEquipment"
                                    name="videoEquipment"
                                    onChange={(e) => {handleFormChange("videoEquipment", e.target.value)}}
                                    accept="video/*"
                                    placeholder={formData.videoEquipment}
                                />
                            </S.UploadInputLabel>
                            
                            <S.UploadInputLabel htmlFor="imageEquipment">
                                {formData.imageEquipment}
                                <S.IconUpload src={imageUpload} alt="" />
                                <S.InputFile 
                                    type="file" 
                                    id="imageEquipment" 
                                    name="imageEquipment"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </S.UploadInputLabel>
                            <InputModal 
                                name="title" 
                                type="text" 
                                placeholder="Título do treinamento"
                                onChange={handleFormChange}
                                value={formData.title}
                            />
                            <InputModal 
                                name="description" 
                                type="description" 
                                placeholder="Descrição do treinamento"
                                onChange={handleFormChange}
                                value={formData.description}
                            />
                            <S.ContainerButtonsForm>
                                <ButtonModal
                                    value="Criar"
                                    onClick={() => {}}
                                />
                                <ButtonModal
                                    isCancel
                                    value="Cancelar"
                                    onClick={() => {}}
                                />
                            </S.ContainerButtonsForm>
                        </S.FormModal>
                    </S.ModalContent>
                </S.ModalContainer>
            </S.BackgroundPopup>
            <S.BackgroundBlur onClick={() => handleCloseModal()}/>
        </S.ContainerPopUp>
    )
}

export default ModalEditTreinamento