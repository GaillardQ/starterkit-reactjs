import * as TextFieldTypes from '../TextField/TextField.type';

export interface IOption {
  value: string;
  label: string;
}
export interface IProps extends TextFieldTypes.IProps {
  options: IOption[];
}
