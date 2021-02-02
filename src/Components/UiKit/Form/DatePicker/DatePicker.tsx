// React libs
import React, { FC } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { TextField } from '@material-ui/core';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './DatePicker.type';

const DatePicker: FC<Types.IProps> = ({
  field,
  form,
  iconColor,
  label,
  needTime,
  ...props
}) => {
  const { errors, touched } = form;
  const customField = {
    ...field,
    onChange: (date: Date | null) => {
      form.setFieldValue(field.name, date);
    },
  };
  const mixedProperties = {
    label,
    clearable: true,
    format: 'DD/MM/YYYY HH:mm:ss',
    ampm: false,
    margin: 'none',
    value: field.value,
    KeyboardButtonProps: {
      'aria-label': 'change date',
    },
    classes: { root: 'w-full' },
    invalidDateMessage: 'Date invalide',
    maxDateMessage: 'Date supérieure à la date max autorisée',
    minDateMessage: 'Date inférieure à la date min autorisée',
    clearLabel: 'Effacer',
    cancelLabel: 'Annuler',
    todayLabel: 'Maintenant',
    TextFieldComponent: TextField,
    error: touched[field.name] && errors[field.name] !== undefined,
    ...customField,
    ...props,
  };

  return (
    <div className='w-full'>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {needTime ? (
          <KeyboardDateTimePicker {...mixedProperties} />
        ) : (
          <KeyboardDatePicker {...mixedProperties} />
        )}
        <FieldError errors={errors[field.name]} touched={touched[field.name]} />
      </MuiPickersUtilsProvider>
    </div>
  );
};

DatePicker.defaultProps = {
  iconColor: 'white',
  needTime: false,
};

export default DatePicker;
