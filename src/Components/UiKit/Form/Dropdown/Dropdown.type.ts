import { SelectProps } from '@material-ui/core';

export interface IOption {
  value: string;
  label: string;
}

export interface IProps extends SelectProps {
  field: any;
  form: any;
  helper: string;
  label: string;
  options: IOption[];
}
