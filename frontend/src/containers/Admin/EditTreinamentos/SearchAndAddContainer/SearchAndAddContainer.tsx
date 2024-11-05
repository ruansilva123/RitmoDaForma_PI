import * as S from "./SearchAndAddContainerStyles";
import InputSearch from '../../../components/site/Treinamentos/Search/Search';
import AddTreinamentosButton from '../../../components/Admin/EditTreinamentos/AddTreinamentosButton/AddTreinamentosButton';



const SearchAndAddContainer = () => {
  return (
    <S.SearchAndAddContainerStyle>
        <S.SearchAndAddContent>
            <S.SearchContainer><InputSearch/></S.SearchContainer>
            <S.AddTreinamentoContainer>
                <AddTreinamentosButton/>
            </S.AddTreinamentoContainer>
        </S.SearchAndAddContent>
    </S.SearchAndAddContainerStyle>
  );
};

export default SearchAndAddContainer;