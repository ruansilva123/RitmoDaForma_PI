import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const CardContactStyle = styled.div`
    /* background-color: white; */
    width: 20vw;
    max-width: 200px;
    min-width: 220px;
    max-height: 250px;
`

export const TitleContact = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    align-items: center;

    &>img{
        width: 40px;
    }

    &>a{
        transition: color .2s ease-in-out;
        &:hover{
            color: ${colors.lightRed};
        }
    }

`

export const DescriptionContact = styled.div`
    color: white;
    text-align: justify;
`