import { treinamentosActionType } from "@/types/types";
import blabla from "../../../public/assets/images/woman-halter.png"

const initialState = {
    datas: [
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/woman-halter.png",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/woman-halter.png",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/woman-halter.png",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/woman-halter.png",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/woman-halter.png",
            videoEquipment: "",
        },
        
    ],
};

const treinamentosReducer = (state = initialState, action: treinamentosActionType) => {
    switch (action.type) {
        case "CREATE_TREINAMENTO":
            return {
                ...state,
                datas: [...state.datas, action.payload]
            };
        default:
            return state;
    }
};

export default treinamentosReducer;
  