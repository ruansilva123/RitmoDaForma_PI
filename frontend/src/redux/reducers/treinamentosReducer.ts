import { treinamentosActionType } from "@/types/types";

const initialState = {
    datas: [
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/maquina-elevacao-pelvica.jpeg",
            videoEquipment: "https://www.youtube.com/embed/GhJfOuoJn1A?si=5JPgxf6qAj4bRETe",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/banco-reto.jpeg",
            videoEquipment: "https://www.youtube.com/embed/GhJfOuoJn1A?si=5JPgxf6qAj4bRETe",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/cadeira.jpeg",
            videoEquipment: "https://www.youtube.com/embed/GhJfOuoJn1A?si=5JPgxf6qAj4bRETe",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/maquina-braco.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/maquina-braco-3.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/pesos.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/remada-curvada.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/extensora.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/alongamento.jpeg",
            videoEquipment: "",
        },
        {
            title: "Halteres",
            description: "Fortalecimento dos músculos e flexibilidade",
            imageEquipment: "/assets/images/equipments/abdominal.jpeg",
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
  