import { priceAulasType, priceAulasItemType } from "@/types/types";

const initialState = {
    datas: [
        {
            daysForWeek:"2 Aulas Semanais", 
            payment:[
                {paymentForMonth: "Semestral", price: 130.00}, 
                {paymentForMonth: "Trimestral", price: 140.00},
                {paymentForMonth: "Mensal", price: 160.00}
            ]
        },
        {
            daysForWeek:"3 Aulas Semanais", 
            payment:[
                {paymentForMonth: "Semestral", price: 140.00}, 
                {paymentForMonth: "Trimestral", price: 150.00},
                {paymentForMonth: "Mensal", price: 180.00}
            ]
        },
        {
            daysForWeek:"4 Aulas Semanais", 
            payment:[
                {paymentForMonth: "Semestral", price: 170.00}, 
                {paymentForMonth: "Trimestral", price: 190.00},
                {paymentForMonth: "Mensal", price: 220.00}
            ]
        },
        {
            daysForWeek:"5 Aulas Semanais", 
            payment:[
                {paymentForMonth: "Semestral", price: 180.00}, 
                {paymentForMonth: "Trimestral", price: 200.00},
                {paymentForMonth: "Mensal", price: 250.00}
            ]
        }
        
    ],
};

const priceAulasTableReducer = (state = initialState, action: priceAulasType) => {
    switch (action.type) {
        case "UPDATE_PRICE_AULA":
            return {
                ...state,
                datas: () => {
                    const newState: priceAulasItemType[] = JSON.parse(JSON.stringify(state.datas));
                    
                    newState.map((item, indexNewState) => {
                        if(item.daysForWeek === action.payload.daysForWeek){
                            item.payment.map((paymentForm, indexPayment) => {
                                paymentForm = paymentForm.paymentForMonth === action.payload.payment.paymentForMonth ?
                                    {...paymentForm, price: action.payload.payment.price}
                                :
                                    paymentForm
                                
                                item.payment[indexPayment] = paymentForm;
                                newState[indexNewState] = item;
                            })
                        }
                    })

                    return newState;
                }
            };
        default:
            return state;
    }
};

export default priceAulasTableReducer;