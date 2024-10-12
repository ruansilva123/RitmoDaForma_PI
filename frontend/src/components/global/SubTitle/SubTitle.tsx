import React from "react";
import * as S from "./SubTitleStyles";

interface SubTitleProps {
    subTitle: string,
    mainTitle: string,
    darkMode?: boolean,
}

const SubTitle: React.FC<SubTitleProps> = ({subTitle, mainTitle, darkMode}) => {
    return (
        <>
            <S.SubTitleStyle data-darkmode={darkMode ? darkMode : false} >{subTitle}</S.SubTitleStyle>
            <S.MainTitle>{mainTitle}</S.MainTitle>
        </>

    );
}

export default SubTitle;