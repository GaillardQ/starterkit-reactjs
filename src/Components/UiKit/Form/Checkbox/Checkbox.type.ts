import { CheckboxProps } from '@material-ui/core';

export interface IProps extends CheckboxProps {
  field: any;
  form: any;
  label?: string;
  labelClasses?: string;
}
