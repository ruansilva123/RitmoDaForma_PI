import { paymentType } from "@/types/types";

export const updatePriceAulasTable = (daysForWeek: string, payment: paymentType) => ({
    type: 'UPDATE_AULA',
    payload: { daysForWeek, payment },
});