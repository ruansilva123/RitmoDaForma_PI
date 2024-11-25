import { treinamentosActionType } from "@/types/types";

const initialState = {
    datas: [
        {
            "title": "Abdominal Máquina",
            "description": "Equipamento para fortalecimento dos músculos abdominais com suporte e ajuste de carga.",
            "imageEquipment": "/assets/images/equipments/abdominal-maquina.jpeg",
            "videoEquipment": ""
        },
        {
            "title": "Halteres com Banco",
            "description": "Ideal para exercícios que trabalham peito, ombros e tríceps em diferentes ângulos.",
            "imageEquipment": "/assets/images/equipments/halteres-com-banco-inclinado-2.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/GhJfOuoJn1A?si=5JPgxf6qAj4bRETe"
        },
        {
            "title": "Halteres",
            "description": "Fortalecimento dos músculos e flexibilidade, com exercícios livres e dinâmicos.",
            "imageEquipment": "/assets/images/equipments/halteres.jpeg",
            "videoEquipment": "assets/videos/teste.mp4"
        },
        {
            "title": "Supino Reto Barra",
            "description": "Treino para peitoral, ombros e tríceps com barra em posição plana.",
            "imageEquipment": "/assets/images/equipments/supino-reto-barra.jpeg",
            "videoEquipment": ""
        },
        {
            "title": "Supino Reto Máquina",
            "description": "Equipamento guiado para o treino seguro do peitoral e ombros.",
            "imageEquipment": "/assets/images/equipments/supino-reto-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/q9MMWHMKeFU?si=M-N3LfsT_4qIKT41"
        },
        {
            "title": "Supino Inclinado Máquina",
            "description": "Focado no peitoral superior e ombros, com suporte para maior segurança.",
            "imageEquipment": "/assets/images/equipments/supino-inclinado-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/G-izqEmfq9Q?si=aUPQromy6I-LtZxH"
        },
        {
            "title": "Remada Sentado Máquina",
            "description": "Trabalha costas e bíceps com suporte lombar e ajuste de carga.",
            "imageEquipment": "/assets/images/equipments/remada-sentado-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/ufmkaWW0AGY?si=rh_0_Xc3vFmo0UPL"
        },
        {
            "title": "Remada Cavalinho Máquina",
            "description": "Focado nos músculos das costas, com movimento guiado e ergonômico.",
            "imageEquipment": "/assets/images/equipments/remada-cavalinho-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/qZ1U_kzpQ-E?si=9RfPsBU5zE2wsDsE"
        },
        {
            "title": "Desenvolvimento Barra",
            "description": "Exercício para ombros, peitoral superior e tríceps com barra.",
            "imageEquipment": "/assets/images/equipments/desenvolvimento-barra.jpeg",
            "videoEquipment": ""
        },
        {
            "title": "?",
            "description": "?",
            "imageEquipment": "/assets/images/equipments/alongamento.jpeg",
            "videoEquipment": ""
        },
        {
            "title": "?",
            "description": "?",
            "imageEquipment": "/assets/images/equipments/abdominal.jpeg",
            "videoEquipment": ""
        },
        {
            "title": "Scott Livre",
            "description": "Equipamento para exercícios focados no bíceps, com maior controle e estabilidade.",
            "imageEquipment": "/assets/images/equipments/scott-livre.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/xF2bghz7mPE?si=tddj2HaUt7jEvSAL"
        },
        {
            "title": "?",
            "description": "?",
            "imageEquipment": "/assets/images/equipments/cadeira.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/GhJfOuoJn1A?si=5JPgxf6qAj4bRETe"
        },
        {
            "title": "Elevação Pélvica",
            "description": "Exercício para glúteos e músculos posteriores da coxa, com suporte de peso.",
            "imageEquipment": "/assets/images/equipments/elevacao-pelvica-livre.jpeg",
            "videoEquipment": "assets/videos/teste.mp4"
        },
        {
            "title": "Pesos",
            "description": "Acessórios versáteis para exercícios de fortalecimento muscular e carga adicional.",
            "imageEquipment": "/assets/images/equipments/pesos.jpeg",
            "videoEquipment": ""
        }
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
  