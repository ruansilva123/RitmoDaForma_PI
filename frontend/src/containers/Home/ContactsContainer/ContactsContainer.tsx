import React from 'react';
import * as S from "./ContactsContainerStyles"
import { forwardRef } from "react";

const ContactsContainer = forwardRef<HTMLDivElement>(
    (props, ref) => {
        return (
            <S.ContactsContainerStyle ref={ref}>
            </S.ContactsContainerStyle>
        );
    }
)

export default ContactsContainer;