import { treinamentosActionType } from "@/types/types";

const initialState = {
    datas: [
        {
            "title": "Abdominal Máquina",
            "description": "Equipamento para fortalecimento dos músculos abdominais com suporte e ajuste de carga.",
            "imageEquipment": "/assets/images/equipments/abdominal-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/j7f_UEWf_wU?si=LHTbWvUSPYOZq6U_"
        },
        {
            "title": "Halteres com Banco",
            "description": "Ideal para exercícios que trabalham peito, ombros e tríceps em diferentes ângulos.",
            "imageEquipment": "/assets/images/equipments/halteres-com-banco-inclinado-2.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/BqgjlpYo1MQ?si=YQN5IZGKh93j_Pcy"
        },
        {
            "title": "Halteres",
            "description": "Fortalecimento dos músculos e flexibilidade, com exercícios livres e dinâmicos.",
            "imageEquipment": "/assets/images/equipments/halteres.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/6Dm--jUIQOs?si=Li8zsxGaQ4WVdKgW"
        },
        {
            "title": "Alongamento Deitado",
            "description": "Exercício de alongamento realizado em posição deitada, focado em relaxar a musculatura e melhorar a flexibilidade.",
            "imageEquipment": "/assets/images/equipments/alongamento-deitado.png",
            "videoEquipment": "https://www.youtube.com/embed/fw_PYrHFsGQ?si=8xOjJ7njccCK2_La"
        },
        {
            "title": "Alongamento em Pé",
            "description": "Exercício de alongamento realizado em pé, ideal para aquecer e alongar diferentes grupos musculares antes ou após o treino.",
            "imageEquipment": "/assets/images/equipments/alongamento-em-pe.png",
            "videoEquipment": "https://www.youtube.com/embed/SlvQc1KLMys?si=kPnD-JbAfLEEQ8sx"
        },
        {
            "title": "Posterior de Coxa",
            "description": "Máquina focada no fortalecimento dos músculos posteriores da coxa, promovendo força e estabilidade na parte inferior do corpo.",
            "imageEquipment": "/assets/images/equipments/posterior-de-coxa.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/TE24-RHoGuU?si=ZzPBofRibP-zHFqO"
        },
        {
            "title": "Máquina Gravton",
            "description": "Equipamento versátil que permite o treinamento de diferentes grupos musculares, ideal para exercícios de resistência e força.",
            "imageEquipment": "/assets/images/equipments/maquina-gravton.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/-LAC0HLEB38?si=Jk9W4UH6O4okpc5v"
        },        
        {
            "title": "Supino Reto Barra",
            "description": "Treino para peitoral, ombros e tríceps com barra em posição plana.",
            "imageEquipment": "/assets/images/equipments/supino-reto-barra.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/3e-CS57JD1E?si=ryT3FZIMgZuETI1f"
        },
        {
            "title": "Supino Inclinado Barra",
            "description": "Exercício com barra que foca na parte superior do peitoral e nos ombros.",
            "imageEquipment": "/assets/images/equipments/supino-inclinado-barra.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/5FyvJdOEAhQ?si=7F2qrWjfAFZ__ocs"
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
            "videoEquipment": "https://www.youtube.com/embed/WgafOYEBqy0?si=H8MOfERh-bmPI1a4"
        },
        {
            "title": "Desenvolvimento Máquina",
            "description": "Máquina projetada para exercícios de fortalecimento dos ombros e parte superior do peitoral, promovendo estabilidade e segurança nos movimentos.",
            "imageEquipment": "/assets/images/equipments/desenvolvimento-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/DpXJ41nt1lQ?si=yV7IpeHzYlb4uFlb"
        },        
        {
            "title": "Remada Sentado Máquina",
            "description": "Equipamento para fortalecer os músculos das costas, especialmente o latíssimo do dorso, com suporte para maior estabilidade.",
            "imageEquipment": "/assets/images/equipments/remada-sentado-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/ufmkaWW0AGY?si=nk6vflBROnpSOTVe"
        },
        {
            "title": "Flexão de Joelho Mini Band",
            "description": "Exercício com mini band que fortalece os músculos posteriores da coxa e melhora a estabilidade do joelho.",
            "imageEquipment": "/assets/images/equipments/flexao-de-joelho-mini-band.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/dZhDr8PNnqo?si=aWiCOMrBDZaD7gZG"
        },
        {
            "title": "Agachamento com Base",
            "description": "Equipamento que auxilia na realização de agachamentos, garantindo maior estabilidade e suporte.",
            "imageEquipment": "/assets/images/equipments/agachamento-com-base.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/CdtZW7ODyXs?si=S_sjImv6j08_kVF1"
        },
        {
            "title": "Afundo Barra Guiada",
            "description": "Exercício que trabalha pernas e glúteos, utilizando uma barra guiada para maior controle e segurança.",
            "imageEquipment": "/assets/images/equipments/afundo-barra-guiada.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/j7HPmyMmJaU?si=YmSmjSnRTFy-n3wR"
        },
        {
            "title": "Paralela Máquina",
            "description": "Máquina que permite realizar paralelas assistidas, focando nos tríceps, ombros e peito.",
            "imageEquipment": "/assets/images/equipments/paralela-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/wbIiBSe2ZF4?si=U6y65Kuy_k6C9zjJ"
        },
        {
            "title": "Cadeira Extensora",
            "description": "Máquina para fortalecer os quadríceps com movimentos controlados e isolados.",
            "imageEquipment": "/assets/images/equipments/cadeira-extensora.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/Rh3IjswO0ZI?si=XgncPszXvditfJDU"
        },
        {
            "title": "Polia",
            "description": "Equipamento versátil que permite trabalhar diferentes grupos musculares com cabos ajustáveis.",
            "imageEquipment": "/assets/images/equipments/polia.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/-DLDAd9GoWo?si=nVFaStjwK2jO0_zE"
        },
        {
            "title": "Polia 2",
            "description": "Versão compacta de polia, ideal para exercícios de força e alongamento.",
            "imageEquipment": "/assets/images/equipments/polia-2.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/Z80L_VlHFxg?si=h1jx77tjx7cYNgpv"
        },
        {
            "title": "Crossover",
            "description": "Equipamento utilizado para exercícios de fortalecimento da parte superior do corpo, especialmente peitoral, ombros e braços, com foco em movimentos cruzados.",
            "imageEquipment": "/assets/images/equipments/crossover.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/JFOLhjy9uAI?si=BlrhPygUerXc4Wrt"
        },        
        {
            "title": "Barra Fixa",
            "description": "Equipamento para exercícios de tração, como pull-ups e chin-ups, fortalecendo costas e braços.",
            "imageEquipment": "/assets/images/equipments/barra-fixa.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/FDmYDcQBBpw?si=lBOy3O_7VcXhwtOk"
        },
        {
            "title": "Barra Fixa Máquina",
            "description": "Máquina que oferece suporte assistido para pull-ups, ajudando iniciantes e permitindo maior controle.",
            "imageEquipment": "/assets/images/equipments/barra-fixa-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/O5JDinWq7ZI?si=iS13oQjjFura-1Vi"
        },
        {
            "title": "Máquina Hack",
            "description": "Máquina projetada para realizar agachamentos com suporte para coluna e movimentos controlados.",
            "imageEquipment": "/assets/images/equipments/agachamento-hack.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/TPSTIKFGsZk?si=8lmfxIA_YWyKeW4Z"
        },
        {
            "title": "Agachamento Guiado",
            "description": "Exercício de agachamento realizado em uma máquina Smith, garantindo estabilidade e segurança.",
            "imageEquipment": "/assets/images/equipments/agachamento-guiado.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/aXA9iF3c6nA?si=YRQtkXyaydG1MvIH"
        },
        {
            "title": "Tríceps Corda",
            "description": "Exercício realizado em polia, utilizando uma corda para fortalecer os músculos tríceps de forma eficiente.",
            "imageEquipment": "/assets/images/equipments/triceps-corda.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/Q1FDfDCZq5s?si=3z73kw1ykRKWSg8f"
        },
        {
            "title": "Supino Sentado",
            "description": "Máquina para fortalecimento do peitoral, ombros e tríceps, com postura sentada.",
            "imageEquipment": "/assets/images/equipments/supino-sentado.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/Ep5Zsu5Kyrg?si=iId27sKOo7TbE0yN"
        },
        {
            "title": "Supino Reto Máquina",
            "description": "Equipamento para executar o movimento de supino reto com maior estabilidade e segurança.",
            "imageEquipment": "/assets/images/equipments/supino-reto-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/q9MMWHMKeFU?si=LBy4MM8srb9jEMBh"
        },
        {
            "title": "Supino Inclinado Máquina",
            "description": "Máquina que permite trabalhar a parte superior do peitoral com segurança e estabilidade.",
            "imageEquipment": "/assets/images/equipments/supino-inclinado-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/G-izqEmfq9Q?si=2yPFFM51t5vYcLgV"
        },
        {
            "title": "Puxada Alta",
            "description": "Máquina para exercícios que trabalham os músculos das costas, especialmente o grande dorsal, promovendo força e definição na parte superior do corpo.",
            "imageEquipment": "/assets/images/equipments/puxada-alta.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/DdZuizEgP5k?si=K7pxUJ-UGjcyeF4m"
        },
        {
            "title": "Puxada Alta 2",
            "description": "Máquina para fortalecer costas e braços, simulando o movimento de pull-ups.",
            "imageEquipment": "/assets/images/equipments/puxada-alta-2.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/wijCLIaNQUw?si=KfWaVAln2piMETCY"
        },
        {
            "title": "Apolete",
            "description": "Equipamento que foca no fortalecimento dos ombros e costas, ideal para melhorar a postura e estabilidade muscular.",
            "imageEquipment": "/assets/images/equipments/apolete.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/VZfDI2MffTs?si=FPRbC4R9HDiY4442"
        },
        {
            "title": "Posterior Deitado Máquina",
            "description": "Máquina projetada para trabalhar os músculos posteriores da coxa em posição deitada.",
            "imageEquipment": "/assets/images/equipments/posterior-deitado-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/FRPjFq3ZWWI?si=BuYif1GtK3RGQM5t"
        },
        {
            "title": "Leg Press 2",
            "description": "Máquina que permite o fortalecimento das pernas e glúteos com variação de ângulo e carga.",
            "imageEquipment": "/assets/images/equipments/leg-press-2.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/FRPjFq3ZWWI?si=BuYif1GtK3RGQM5t"
        },
        {
            "title": "Glúteo Máquina",
            "description": "Máquina para isolar e fortalecer os músculos glúteos com movimentos controlados.",
            "imageEquipment": "/assets/images/equipments/glutio-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/m_UeUMPAXdg?si=i4lpguBiUy84R94N"
        },
        {
            "title": "Flexora em Pé",
            "description": "Máquina que foca nos músculos posteriores da coxa, permitindo movimentos unilaterais.",
            "imageEquipment": "/assets/images/equipments/flexora-em-pe.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/-8wlzDUkqxg?si=wC2A9l63f_-SNPlU"
        },
        {
            "title": "Máquina Scott",
            "description": "Equipamento para treino de bíceps com suporte para maior estabilidade e isolamento muscular.",
            "imageEquipment": "/assets/images/equipments/maquina-scott.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/k1r9tFsWMt0?si=KZiBgmhyp37OxKjm"
        },
        {
            "title": "Máquina Abdutora",
            "description": "Máquina para fortalecer os músculos abdutores, responsáveis pela lateralização das pernas.",
            "imageEquipment": "/assets/images/equipments/maquina-abdutora.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/n9OVlZAnSAI?si=SFddVZit99PQ_g1j"
        },
        {
            "title": "Máquina Adutora",
            "description": "Máquina que trabalha os músculos adutores, essenciais para estabilização e mobilidade das pernas.",
            "imageEquipment": "/assets/images/equipments/maquina-adutora.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/vyFpKoFe1ck?si=6b8VdcrbXPJ2jyxK"
        },
        {
            "title": "Flexora Deitado",
            "description": "Máquina para fortalecimento dos músculos posteriores da coxa, garantindo amplitude e controle.",
            "imageEquipment": "/assets/images/equipments/flexora-deitado.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/o8cRjLUHF7Q?si=RulVJgO1hTEVJ-Al"
        },
        {
            "title": "Coice Máquina",
            "description": "Equipamento ideal para exercícios focados nos glúteos, promovendo fortalecimento e tonificação dessa região.",
            "imageEquipment": "/assets/images/equipments/coice-maquina.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/kkmheNrzmh8?si=hePBc-_alFSnOjNo"
        },
        {
            "title": "Peck Deck",
            "description": "Máquina projetada para o treinamento dos músculos peitorais, com foco em movimentos de adução para fortalecer e definir o tórax.",
            "imageEquipment": "/assets/images/equipments/peck-deck.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/YzjOxLue8Cs?si=04pHq7kaGGkyI4Ki"
        },
        {
            "title": "Scott Livre",
            "description": "Equipamento para exercícios focados no bíceps, com maior controle e estabilidade.",
            "imageEquipment": "/assets/images/equipments/scott-livre.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/xF2bghz7mPE?si=tddj2HaUt7jEvSAL"
        },
        {
            "title": "Treino em Suspensão (TRX)",
            "description": "Equipamento que utiliza o peso corporal para exercícios funcionais e de fortalecimento.",
            "imageEquipment": "/assets/images/equipments/treino-em-suspencao-trx.png",
            "videoEquipment": "https://www.youtube.com/embed/PFnvASUoUsE?si=DLdaIyJpToY3vVNL"
        },
        {
            "title": "Elevação Pélvica Livre",
            "description": "Exercício para glúteos e músculos posteriores da coxa, com suporte de peso.",
            "imageEquipment": "/assets/images/equipments/elevacao-pelvica-livre.jpeg",
            "videoEquipment": "https://www.youtube.com/embed/K5NTVPezKOg?si=8HRK-PaXFyKp-uKy"
        },
    ],
    searchTerm: "",
};

const treinamentosReducer = (state = initialState, action: treinamentosActionType) => {
    switch (action.type) {
        case "CREATE_TREINAMENTO":
            return {
                ...state,
                datas: [...state.datas, action.payload]
            };
        case "SEARCH_EQUIPAMENT":
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
};

export default treinamentosReducer;
  