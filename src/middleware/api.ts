import axios from 'axios';

const EXCHANGERATES: string = 'https://api.exchangeratesapi.io';

export const ExchangeRatesAPI = axios.create({
    baseURL: EXCHANGERATES
});