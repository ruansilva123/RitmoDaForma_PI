import React from 'react';
import * as S from './LittleBallsStyles';

interface LittleBallsProps {
    isVertical: boolean;
}

const LittleBalls:React.FC<LittleBallsProps> = ({isVertical}) => {
    return (
        <S.ContainerBalls data-isvertical={isVertical}>
            <S.Balls/>
            <S.Balls/>
            <S.Balls/>
        </S.ContainerBalls>
    )
}

export default LittleBalls