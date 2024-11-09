// Misc libs
import type { FieldError, FieldValues, UseFormReturn } from 'react-hook-form';
// @core
import DropdownInputComponent from '@core/form/components/inputs/DropdownInputComponent';
import TextfieldInputComponent from '@core/form/components/inputs/TextfieldInputComponent';
import type { FormFieldModel, TFieldComponent } from '@core/form/models/Form.type';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

type TFormFieldComponentProps<T extends FieldValues> = {
	field: FormFieldModel<T>,
	methods: UseFormReturn<T>
}

const Components: Record<TFieldComponent, <T extends FieldValues>(params: FormFieldModel<T>) => JSX.Element> = {
    date: TextfieldInputComponent,
    number: TextfieldInputComponent,
    passsword: TextfieldInputComponent,
    text: TextfieldInputComponent,
    select: DropdownInputComponent
};

const FormFieldComponent = <T extends FieldValues>(params: TFormFieldComponentProps<T>): JSX.Element => {

    // Variables
    const {
        field,
        methods
    } = params;

    const {
        control,
        register,
        formState: { errors },
        getValues
    } = methods;

    const fieldError = errors[field.name ?? 'field'] as FieldError | undefined;

    const Component = Components[field.type ?? 'text'];

    // Getters
    const getDefaultValue = (): unknown => {
        const values = getValues();
        return values[field.name ?? ''];
    };

    return (
        <UiElement className='flex flex-col'>
            <Component
                { ...field }
                register={ register }
                control={ control }
                defaultValue={ getDefaultValue() }
            />
            { fieldError && (
                <UiTypography
                    color="red-500"
                    size={ 8 }
                >
                    { fieldError.message }
                </UiTypography>
            ) }
        </UiElement>
    );
};

export default FormFieldComponent;
