// Misc libs
import type { ChangeEvent, MutableRefObject } from 'react';
import type { Control, FieldValues, RegisterOptions, UseFormRegister, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';
// @ui
import type { IUiSelectOption } from '@ui/components/input/Select/UiSelect.type';

export type TSelectFieldParameters = {
	options?: IUiSelectOption[];
}

export class FormFieldModel<T extends FieldValues, Y = unknown> {
    children?: FormFieldModel<T, Y>[];
    className?: string;
    control?: Control<T, unknown>;
    defaultValue?: Y;
    id?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    label?: string;
    name?: string;
    onValueChange?: (e?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, value?: unknown) => void;
    placeholder?: string;
    position?: number;
    ref?: MutableRefObject<HTMLInputElement | undefined> | UseFormRegisterReturn;
    register?: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
    selectOptions?: TSelectFieldParameters;
    type?: TFieldComponent;
}

export type TFormModel<T extends FieldValues> = FormFieldModel<T>[];

export type TFormDefinition<T extends FieldValues> = {
	fields: TFormModel<T>,
	methods: UseFormReturn<T>
}

export type TFieldComponent = 'date' | 'number' | 'passsword' | 'text' | 'select'
