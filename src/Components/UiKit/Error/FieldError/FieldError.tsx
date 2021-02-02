// React libs
import React, { FC } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
// Type
import * as Types from './FieldError.type';

const FieldError: FC<Types.IProps> = ({ errors, touched }) => (
  <div className='mt-1'>
    {touched && errors ? (
      <div className='flex items-center text-red-500 text-xs font-extrabold'>
        <ErrorIcon className='mr-1 text-sm' />
        {errors}
      </div>
    ) : (
      <div className='h-4-1/2' />
    )}
  </div>
);

export default FieldError;
