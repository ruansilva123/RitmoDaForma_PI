import * as S from "./SearchStyles";

interface InputSearchProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

const InputSearch: React.FC<InputSearchProps> = ({onChange, value}) => {
    return (
        <S.InputSearchStyle 
            value={value}
            onChange={onChange} 
            placeholder="Pesquise pelo seu equipamento aqui" 
            type="search"/>
    );
};

export default InputSearch;