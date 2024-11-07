export type contextReturModal = {
    isOpen: boolean,  
    openModal: (currentModal: React.ReactNode) => void, 
    closeModal: () => void
}

export interface LocationInterface {
    pathname: string;
    search: string;
    hash: string;
    state?: unknown;
    key: string;
}

export type aulasCalendarType = {
    hour: string, 
    aulas: string[],
}

export type aulasCalendarActionType = {
    type: string,
    payload: { hour: string, aulas: string },
}

export type priceAulasType = {
    type: string,
    payload: { price: string },
}

export type treinamentosActionType = {
    type: string,
    payload: {
        title: string, 
        desc: string, 
        image: string, 
        video: string
    }
}

export type treinamentosType = {
    title: string,
    description: string,
    imageEquipment: string,
    videoEquipment: string,
}

export interface aulasStateType {
    datas: aulasCalendarType[],   
}

export interface treinamentosStateType {
    datas: treinamentosType[],
}
  
export interface rootStateType {
    aulas: aulasStateType,
    treinamentos: treinamentosStateType,
}
