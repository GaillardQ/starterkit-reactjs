// React libs
import React, { FC } from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const customClasses = {
    root: '',
    textPrimary: '',
    textSecondary: '',
    outlinedPrimary: '',
    outlinedSecondary: '',
    containedPrimary:
      'bg-green-500 text-white hover:bg-green-800 disabled:bg-gray-500', // example
    containedSecondary: '',
  };
  return (
    <MaterialButton
      component='button'
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
      classes={customClasses}
      data-testid='button'
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
