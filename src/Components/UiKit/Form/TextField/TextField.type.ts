import { StandardTextFieldProps } from '@material-ui/core';

export interface TextFieldIcon {
  component: any;
  position: 'start' | 'end';
  onClick?: (...args: any) => void;
}
export interface IProps extends StandardTextFieldProps {
  field: any;
  form: any;
  helper?: string;
  canDisplayPassword?: boolean;
  icon?: TextFieldIcon;
}
