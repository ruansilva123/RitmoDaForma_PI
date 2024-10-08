import * as S from "./ContactsContainerStyles"
import { forwardRef } from "react";
import SubTitle from "../../../components/global/SubTitle/SubTitle";
import CardContactsContainer from "../CardContactsContainer/CardContactsContainer";

const ContactsContainer = forwardRef<HTMLDivElement>(
    (props, ref) => {
        return (
            <S.ContactsContainerStyle ref={ref}>
                <S.ContentContacts>
                    <div>
                        <SubTitle subTitle="Entre em" mainTitle="CONTATO" darkMode/>
                    </div>
                    <CardContactsContainer/>
                </S.ContentContacts>
            </S.ContactsContainerStyle>
        );
    }
)

export default ContactsContainer;