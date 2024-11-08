import * as S from "./SearchAndAddContainerStyles";
import InputSearch from '@/components/site/Treinamentos/Search/Search';
import AddTreinamentosButton from '@/components/admin/EditTreinamentos/AddTreinamentosButton/AddTreinamentosButton';
import { useModal } from "@/contexts/ModalProvider";
import ModalEditTreinamento from "@/components/admin/EditTreinamentos/ModalEditTreinamento/ModalEditTreinamento";

const SearchAndAddContainer = () => {
  const { openModal, closeModal } = useModal();

  return (
    <S.SearchAndAddContainerStyle>
        <S.SearchAndAddContent>
            <S.SearchContainer><InputSearch/></S.SearchContainer>
            <S.AddTreinamentoContainer>
                <AddTreinamentosButton
                  value="Novo treinamento"
                  onClick={() => {openModal(<ModalEditTreinamento closeModal={closeModal}/>)}}
                />
            </S.AddTreinamentoContainer>
        </S.SearchAndAddContent>
    </S.SearchAndAddContainerStyle>
  );
};

export default SearchAndAddContainer;