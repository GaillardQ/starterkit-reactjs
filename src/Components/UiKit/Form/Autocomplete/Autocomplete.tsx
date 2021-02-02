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
  multiple,
  onInputChange,
  onSelectValue,
  ...props
}) => {
  const { errors, touched } = form;

  const getValue = () => {
    let value: any[] | any = multiple ? [] : null;
    if (field.value) {
      if (multiple) {
        field.value.forEach((v: string) => {
          const res = options.find(
            (o: Types.IOption) =>
              v.toString().toLowerCase() === o.value.toString().toLowerCase()
          );
          if (res) {
            value?.push(res);
          }
        });
      } else {
        const option = options.find(
          (o: any) =>
            o.value.toString().toLowerCase() ===
            field.value.toString().toLowerCase()
        );
        value = option;
      }
    }
    return value;
  };
  const updateFieldValue = (event: any, newValue: any) => {
    form.setFieldTouched(field.name, true);
    if (multiple) {
      form.setFieldValue(
        field.name,
        newValue
          ? newValue.reduce((list: any[], v: Types.IOption) => {
              list.push(v.value);
              return list;
            }, [])
          : []
      );
    } else {
      form.setFieldValue(field.name, newValue ? newValue.value : '');
    }

    if (onSelectValue) {
      onSelectValue(newValue);
    }
  };
  let otherProps: any = {};
  if (onInputChange) {
    otherProps = Object.assign(otherProps, { onInputChange });
  }
  return (
    <div className='w-full'>
      <AutocompleteComponent
        multiple={multiple}
        options={options as any}
        getOptionLabel={(value: Types.IOption) => (value ? value.label : '')}
        value={getValue()}
        classes={{ popper: 'z-1600' }}
        autoComplete
        includeInputInList
        disabled={disabled === true}
        onChange={updateFieldValue}
        renderInput={params => (
          <TextFieldComponent
            {...params}
            color={color}
            error={touched[field.name] && errors[field.name] !== undefined}
            label={label}
            margin='none'
          />
        )}
        {...props}
        {...otherProps}
      />
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

Autocomplete.defaultProps = {
  freeSolo: false,
  multiple: false,
};
export default Autocomplete;
