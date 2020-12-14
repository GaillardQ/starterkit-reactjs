// React libs
import React, { FC } from 'react';
import AutocompleteComponent from '@material-ui/lab/Autocomplete';
import TextFieldComponent from '@material-ui/core/TextField';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './Autocomplete.type';

const Autocomplete: FC<Types.IProps> = ({
  color,
  disabled,
  field,
  form,
  label,
  options,
}) => {
  const { errors, touched } = form;

  const getValue = () => {
    let value = null;
    if (field.value) {
      const option = options.find(
        (o: any) =>
          o.value.toString().toLowerCase() ===
          field.value.toString().toLowerCase()
      );
      value = option;
    }
    return value;
  };
  return (
    <div className='w-full' data-testid='autocomplete'>
      <AutocompleteComponent
        options={options as any}
        getOptionLabel={(value: Types.IOption) => (value ? value.label : '')}
        id={`auto-complete-${field.id}`}
        value={getValue()}
        clearOnEscape
        autoComplete
        includeInputInList
        disabled={disabled === true}
        onChange={(event: any, newValue: any) => {
          form.setFieldTouched(field.name, true);
          form.setFieldValue(field.name, newValue ? newValue.value : '');
        }}
        renderInput={params => (
          <TextFieldComponent
            {...params}
            color={color}
            error={touched[field.name] && errors[field.name] !== undefined}
            label={label}
            margin='none'
          />
        )}
      />
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

export default Autocomplete;
