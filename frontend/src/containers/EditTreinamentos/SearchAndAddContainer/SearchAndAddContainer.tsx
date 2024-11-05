import * as S from "./SearchAndAddContainerStyles";
import InputSearch from '../../../components/Treinamentos/Search/Search';
import AddTreinamentosButton from '../../../components/EditTreinamentos/AddTreinamentosButton/AddTreinamentosButton';



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