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
    colorPrimary: 'text-orange-300', // example
    colorSecondary: 'text-pink-500', // example
  };

  const customField = {
    ...field,
    onClick: (e: any) => {
      const val = (e.target.value || '').replace(/\s+/gi, ' ');
      form.setFieldValue(field.name, val.trim());
    },
  };
  return (
    <div className='w-full'
      data-testid='checkbox'>
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

export default Checkbox;
