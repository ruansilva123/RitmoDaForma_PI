import styled from "styled-components";
import { colors } from "../../../../styles/Theme";
import breakpoints from "../../../../styles/Breakpoints";

export const AulasCalendarContainerStyle = styled.section`
    width: 100%;
    max-width: 1500px;
`

export const LegendCalendar = styled.div`
    display: flex;
    gap: 15px;
    justify-content: end;
    padding: 15px;
    align-items: center;
    
    @media ${breakpoints.md}{
        gap: 10px;
    }

    img{
        width: 30px;

        @media ${breakpoints.bs}{
            width: 25px;
        }
    }
    p{
        font-size: 24px;
        color: ${colors.darkGray};
        @media ${breakpoints.md}{
            font-size: 20px;
        }

        @media ${breakpoints.bs}{
            font-size: 18px;
        }

        @media ${breakpoints.sm}{
            font-size: 16px;
        }
    }
`