// React libs
import { KeyboardDatePickerProps } from '@material-ui/pickers';

export interface IProps extends KeyboardDatePickerProps {
  field: any;
  form: any;
  iconColor?: string;
  needTime?: boolean;
}
