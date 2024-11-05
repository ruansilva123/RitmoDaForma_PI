const initialState = {
    datas: [
    ],
};

const priceAulasTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PRICE_AULA":
            return {
            };
        case "CREATE_PRICE_AULA":
            return {};
        default:
            return state;
    }
};

export default priceAulasTableReducer;
  