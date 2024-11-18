import * as S from "./ContactsContainerStyles"
import { forwardRef } from "react";
import SubTitle from "@/components/global/SubTitle/SubTitle";
import CardContactsContainer from "../CardContactsContainer/CardContactsContainer";
import WaveWhiteInvert from "/assets/svg/WaveWhiteInvert.svg"

const ContactsContainer = forwardRef<HTMLDivElement>(
    (_, ref) => {
        return (
            <S.ContactsContainerStyle ref={ref}>
                <S.ContentContacts>
                    <div>
                        <SubTitle subTitle="Entre em" mainTitle="CONTATO" darkMode/>
                    </div>
                    <CardContactsContainer/>
                </S.ContentContacts>
                <S.ImageWaveWhite src={WaveWhiteInvert}/>
            </S.ContactsContainerStyle>
        );
    }
)

export default ContactsContainer;