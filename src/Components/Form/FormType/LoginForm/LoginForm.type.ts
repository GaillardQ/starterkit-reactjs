// Types
import { IBaseFormType } from '../FormType.type';

export interface IFormValues {
  email: string;
  password: string;
}

export interface IProps extends IBaseFormType<IFormValues> {}
