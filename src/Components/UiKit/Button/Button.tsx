// React libs
import React, { FC } from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const customClasses = {
    root: '',
    textPrimary: 'text-gray-700 disabled:opacity-50',
    textSecondary: 'text-red-500',
    outlinedPrimary: 'border-gray-700 text-gray-700 disabled:opacity-50',
    outlinedSecondary:
      'border-red-500 text-red-500 hover:bg-selection hover:text-selection-inverse disabled:opacity-50',
    containedPrimary: 'bg-gray-700 text-white disabled:opacity-50',
    containedSecondary: 'bg-red-500 text-white disabled:opacity-50',
    textSizeLarge: 'text-lg',
    textSizeSmall: 'text-xs',
    outlinedSizeLarge: 'text-lg',
    outlinedSizeSmall: 'text-2xs',
  };
  return (
    <MaterialButton
      component='button'
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
      classes={customClasses}
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

Button.propTypes = {};

export default Button;
