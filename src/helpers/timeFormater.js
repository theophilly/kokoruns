import { format } from 'date-fns';

export function timeFormatter(time) {
    return format(new Date(time), 'HH:mm:ss');
}

export const timeString = {
    '00': '12 am',
    '01': '1 am',
    '02': '2 am',
    '03': '3 am',
    '04': '4 am',
    '05': '5 am',
    '06': '6 am',
    '07': '7 am',
    '08': '8 am',
    '09': '9 am',
    10: '10 am',
    11: '11 am',
    12: '12 pm',
    13: '1 pm',
    14: '2 pm',
    15: '3 pm',
    16: '4 pm',
    17: '5 pm',
    18: '6 pm',
    19: '7 pm',
    20: '8 pm',
    21: '9 pm',
    22: '10 pm',
    23: '11 pm'
};
