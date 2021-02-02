// React libs
import React, { FC } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { TextField } from '@material-ui/core';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './TimePicker.type';

const TimePicker: FC<Types.IProps> = ({
  field,
  form,
  iconColor,
  label,
  ...props
}) => {
  const { errors, touched } = form;
  const customField = {
    ...field,
    onChange: (date: Date | null) => {
      form.setFieldValue(field.name, date);
    },
  };
  return (
    <div className='w-full'>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardTimePicker
          clearable
          value={field.value}
          margin='none'
          ampm={false}
          label={label}
          classes={{ root: 'w-full' }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          invalidDateMessage='Date invalide'
          maxDateMessage="Horaire supérieur à l'horaire max autorisé"
          minDateMessage="Horaire inférieur à l'horaire min autorisé"
          clearLabel='Effacer'
          TextFieldComponent={TextField}
          error={touched[field.name] && errors[field.name] !== undefined}
          cancelLabel='Annuler'
          {...customField}
          {...props}
        />
        <FieldError errors={errors[field.name]} touched={touched[field.name]} />
      </MuiPickersUtilsProvider>
    </div>
  );
};

TimePicker.defaultProps = {
  iconColor: 'white',
};

TimePicker.propTypes = {};

export default TimePicker;
