import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const BackgroundLogin = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Tahoma Bold';
        color: ${colors.darkGray};
    }
    p{
        color: ${colors.darkGray}
    }
`

export const Line = styled.div`
    margin: 10px;
    width: 15%;
    height: 1px;
    background-color: ${colors.lightGrayGradient_60}
`