// React libs
import moment from 'moment';
import { IBaseFormType } from '../FormType.type';

export interface IFormValues {
  arrivalDateTime: moment.Moment | null;
  attachment: boolean;
  birthdate: moment.Moment | null;
  city: string;
  departureTime: moment.Moment | null;
  diet: string;
  email: string;
  food: string;
  here: boolean;
  name: string;
  password: string;
}

export interface IProps extends IBaseFormType<IFormValues> {}
