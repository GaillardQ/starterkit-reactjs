// Misc libs
import type { PathValue } from 'react-hook-form';
import { Controller, type FieldValues, type Path } from 'react-hook-form';
// @core
import type { FormFieldModel } from '@core/form/models/Form.type';
// @ui
import UiTextfield from '@ui/components/input/Textfield/UiTextfield';

const TextfieldInputComponent = <T extends FieldValues>(params: FormFieldModel<T>): JSX.Element => {
    const {
        control,
        defaultValue = '',
        label,
        name,
        register,
        rules = {},
        type
    } = params;

    return (
        <Controller
            control={ control }
            name={ name as Path<T> }
            defaultValue={ defaultValue as PathValue<T, Path<T>> }
            render={ ({ field }) => (
                <UiTextfield
                    label={ label }
                    className='w-full'
                    type={ type ?? 'text' }
                    { ...(register && name ? register(name as Path<T>, rules) : {}) }
                    { ...field }
                />
            ) }
        />
    );
};

export default TextfieldInputComponent;
