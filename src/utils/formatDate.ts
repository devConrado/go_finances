import { format } from 'date-fns';

const formatDate = (value: Date): string =>
  format(new Date(value.toString()), 'dd/MM/yyyy');

export default formatDate;
