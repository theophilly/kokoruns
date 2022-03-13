const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const monthNamesAbv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
};
export default function dateFormatter(date) {
    return `${new Date(date).getFullYear()}-${months[monthNames[new Date(date).getMonth()]]}-${('0' + new Date(date).getDate()).slice(-2)}`;
}

export function dateFormatter2(date) {
    return `${monthNamesAbv[new Date(date).getMonth()]} ${('0' + new Date(date).getDate()).slice(-2)}, ${new Date(date).getFullYear()}`;
}
