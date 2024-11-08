// Misc lib
import type { MenuItemProps } from '@mui/material/MenuItem';
import type { SelectProps } from '@mui/material/Select';
import type { TextFieldVariants } from '@mui/material/TextField';

export type TUiSelect = SelectProps<string> & {
	label: string;
	options: IUiSelectOption[];
	variant?: TextFieldVariants;
}

export interface IUiSelectOption extends MenuItemProps{
	id: string;
}
