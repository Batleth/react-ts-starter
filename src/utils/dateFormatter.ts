import moment from 'moment';

export const shortDate = (date: Date): string => moment(date).format('LL');
