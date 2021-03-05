// React libs
import React, { FC } from 'react';
import CheckboxComponent from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './Checkbox.type';

const Checkbox: FC<Types.IProps> = ({
  field,
  form,
  label,
  labelClasses,
  ...props
}) => {
  const { errors, touched } = form;

  const customClasses = {
    root: '',
    colorPrimary: 'text-gray-700',
    colorSecondary: 'text-red-500',
  };

  const customField = {
    ...field,
    onClick: (e: any) => {
      form.setFieldValue(field.name, !(e.target.value === 'true'));
    },
  };
  return (
    <div className='w-full'>
      <FormControlLabel
        control={
          <CheckboxComponent
            checked={field.value}
            classes={customClasses}
            {...customField}
            {...props}
          />
        }
        className={labelClasses}
        label={label}
      />
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
