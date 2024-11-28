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

export type paymentType = {
    paymentForMonth: string,
    price: number,
}

export type priceAulasItemType = {
    daysForWeek: string, 
    payment: paymentType[]
}

export type priceAulasType = {
    type: string,
    payload: { 
        daysForWeek: string, 
        payment: paymentType 
    },
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
    searchTerm: string,
}

export interface aulasPriceStateType {
    datas: priceAulasItemType[],
}
  
export interface rootStateType {
    aulas: aulasStateType,
    treinamentos: treinamentosStateType,
    aulasPrice: aulasPriceStateType,
}
