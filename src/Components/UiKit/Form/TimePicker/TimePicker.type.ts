// React libs
import { KeyboardTimePickerProps } from '@material-ui/pickers';

export interface IProps extends KeyboardTimePickerProps {
  field: any;
  form: any;
  iconColor?: string;
}
