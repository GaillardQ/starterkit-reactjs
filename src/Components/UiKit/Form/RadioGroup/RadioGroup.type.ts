// React libs
import { RadioProps } from '@material-ui/core';

export interface IOption {
  label: string;
  value: string;
}

export interface IProps extends RadioProps {
  field: any;
  form: any;
  label: string;
  options: IOption[];
}
