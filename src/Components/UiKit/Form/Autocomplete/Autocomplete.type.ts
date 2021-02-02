import * as TextFieldTypes from '../TextField/TextField.type';

export interface IOption {
  value: string;
  label: string;
}
export interface IProps extends TextFieldTypes.IProps {
  freeSolo?: boolean;
  filterOptions?: (...args: any) => any;
  options: IOption[];
  multiple?: boolean;
  onInputChange?: (...args: any) => any;
  onSelectValue?: (...args: any) => any;
}
