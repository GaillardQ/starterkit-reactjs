// React libs
import React, { FC } from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup as RadioGroupComponent,
} from '@material-ui/core';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './RadioGroup.type';

const RadioGroup: FC<Types.IProps> = ({
  field,
  form,
  label,
  options,
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
    <div className='w-full'>
      <FormControl component='fieldset'>
        <FormLabel component='legend' className='text-white'>
          {label}
        </FormLabel>
        <RadioGroupComponent {...customField} {...props}>
          {options &&
            options.map((o: Types.IOption) => (
              <FormControlLabel
                key={o.value}
                value={o.value}
                control={<Radio classes={customClasses} />}
                label={o.label}
              />
            ))}
        </RadioGroupComponent>
      </FormControl>
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

export default RadioGroup;
