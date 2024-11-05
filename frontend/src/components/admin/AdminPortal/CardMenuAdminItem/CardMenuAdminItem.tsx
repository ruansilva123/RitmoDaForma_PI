import * as S from "./CardMenuAdminItemStyles";

interface cardMenuAdminItemProps {
    title: string,
    icon: string,
}

const CardMenuAdminItem:React.FC<cardMenuAdminItemProps> = ({title, icon}) => {
  return (
    <S.CardMenuAdminItemStyle>
        <p>{title}</p>
        <S.IconCardMenuAdmin src={icon} alt=""/>
    </S.CardMenuAdminItemStyle>
  );
};

export default CardMenuAdminItem;