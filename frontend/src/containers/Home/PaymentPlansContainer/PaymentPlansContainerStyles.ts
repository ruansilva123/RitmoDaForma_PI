import styled from "styled-components"

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
    padding-block: clamp(50px, 24vh, 24vh);
    width: 100%;
    max-width: 1500px;
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: -28%;
    right: 0;
    height: 35%;
    min-height: 315px;
    z-index: 0;
    transform: rotate(180deg);
    width: 100%;
`