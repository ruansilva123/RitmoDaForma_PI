import styled from "styled-components";
import { colors } from "../../../../styles/Theme";
import breakpoints from "../../../../styles/Breakpoints";

export const CardContactStyle = styled.div`
    max-width: 220px;
    max-height: 250px;
    padding-bottom: 50px;
    @media ${breakpoints.sm} {
        padding-bottom: 0px;
    }
`

export const TitleContact = styled.p`
    word-break: break-word;
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    align-items: center;

    @media ${breakpoints.md} {
        font-size: 16px;
    }

    @media ${breakpoints.sm} {
        font-size: 14px;
    }

    @media ${breakpoints.xs} {
        margin-bottom: 15px;
        gap: 10px;
        font-size: 12px;
    }

    &>img{
        width: 40px;

        @media ${breakpoints.md} {
            width: 30px;
        }
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
    font-size: 18px;

    @media ${breakpoints.md} {
        font-size: 16px;
    }

    @media ${breakpoints.sm} {
        font-size: 14px;
    }

    @media ${breakpoints.xs} {
        font-size: 12px;
    }
`