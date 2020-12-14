import { StandardTextFieldProps } from '@material-ui/core';

export interface TextFieldIcon {
  component: any;
  position: 'start' | 'end';
}
export interface IProps extends StandardTextFieldProps {
  field: any;
  form: any;
  helper?: string;
  canDisplayPassword?: boolean;
  icon?: TextFieldIcon;
}
