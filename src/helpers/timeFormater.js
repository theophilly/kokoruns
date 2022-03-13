import { format } from 'date-fns';

export function timeFormatter(time) {
    return format(new Date(time), 'HH:mm:ss');
}
