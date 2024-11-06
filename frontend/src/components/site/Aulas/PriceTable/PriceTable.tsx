import * as S from "./PriceTableStyles";

const PriceTable = () => {
  return (
    <S.PriceTableStyle>
        <S.HeaderPriceTable>
            2 Aulas Semanais
        </S.HeaderPriceTable>
        <S.BodyPriceTable>
            <tbody>
                <tr>
                    <td>Semestral</td>
                    <td>R$ 130,00</td>
                </tr>
                <tr>
                    <td>Trimestral</td>
                    <td>R$ 140,00</td>
                </tr>
                <tr>
                    <td>Mensal</td>
                    <td>R$ 160,00</td>
                </tr>
            </tbody>
        </S.BodyPriceTable>
    </S.PriceTableStyle>
  );
};

export default PriceTable;