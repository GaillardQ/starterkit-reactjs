// React libs
import React, { FC } from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const customClasses = {
    root: '',
    textPrimary: 'text-red-610 hover:bg-transparent disabled:opacity-50',
    textSecondary:
      'bg-main-light text-gray-700 hover:bg-selection hover:text-selection-inverse',
    outlinedPrimary:
      'border-red-610 text-red-610 hover:bg-transparent disabled:opacity-50',
    outlinedSecondary:
      'border-gray-700 bg-main-light text-gray-700 hover:bg-selection hover:text-selection-inverse',
    containedPrimary: 'bg-main-light text-gray-700',
    containedSecondary: '',
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

export default Button;
