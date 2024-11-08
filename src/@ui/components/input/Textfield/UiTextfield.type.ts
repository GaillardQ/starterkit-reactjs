// Misc libs
import type { TextFieldProps, TextFieldVariants } from '@mui/material/TextField';

export interface IUiTextfield extends Omit<TextFieldProps, 'variant'> {
  variant?: TextFieldVariants;
}
