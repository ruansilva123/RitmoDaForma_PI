import styled from "styled-components"
import breakpoints from "../../../../styles/Breakpoints"

export const PaymentPlansContainerStyle = styled.section`
    width: 100%;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTitlePaymentPlans = styled.div`
    padding-inline: 120px;
    padding-block: clamp(50px, 18vw, 18vw);
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;

    @media ${breakpoints.md} {
        padding-inline: 80px;
    }

    @media ${breakpoints.sm} {
        padding-inline: 55px;
    }

    @media ${breakpoints.xs} {
        align-items: center;
        padding-inline: 15px;
    }
`