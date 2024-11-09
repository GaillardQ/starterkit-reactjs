// Misc libs
import type { Path, PathValue } from 'react-hook-form';
import { Controller, type FieldValues } from 'react-hook-form';
// @core
import type { FormFieldModel } from '@core/form/models/Form.type';
// @ui
import UiSelect from '@ui/components/input/Select/UiSelect';

const DropdownInputComponent = <T extends FieldValues>(params: FormFieldModel<T>): JSX.Element => {
    // Variables
    const {
        control,
        defaultValue = '',
        label = '',
        name,
        register,
        rules = {},
        selectOptions
    } = params;

    return (
        <Controller
            control={ control }
            name={ name as Path<T> }
            defaultValue={ defaultValue as PathValue<T, Path<T>> }
            render={ ({ field }) => (
                <UiSelect
                    label={ label }
                    options={ selectOptions?.options ?? [{ id: '', value: 'km', children: 'Pas d\'élément', disabled: true }] }
                    { ...(register && name ? register(name as Path<T>, rules) : {}) }
                    { ...field }
                />
            ) }
        />

    );
};

export default DropdownInputComponent;
