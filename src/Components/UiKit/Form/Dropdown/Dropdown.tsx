// React libs
import React, { FC } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './Dropdown.type';

const Dropdown: FC<Types.IProps> = ({ field, form, options, ...props }) => {
  const { errors, touched } = form;
  const customField = {
    ...field,
    onChange: (event: any) => {
      form.setFieldValue(
        field.name,
        event && event.target ? event.target.value : '',
        true
      );
    },
  };
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
    <div className='w-full'>
      <TextField
        select
        value={getValue()}
        className='w-full'
        {...customField}
        {...props}
      >
        {options &&
          options.map((o: Types.IOption) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
      </TextField>
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

export default Dropdown;
