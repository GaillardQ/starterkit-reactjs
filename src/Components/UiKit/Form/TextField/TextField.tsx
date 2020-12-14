// React libs
import React, { FC, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextFieldComponent from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// Components
import FieldError from '../../Error/FieldError/FieldError';
// Type
import * as Types from './TextField.type';

const TextField: FC<Types.IProps> = ({
  field,
  form,
  helper,
  icon,
  type,
  canDisplayPassword,
  ...props
}) => {
  const { errors, touched } = form;

  const [passwordDisplayed, setPasswordDisplayed]: [
    boolean,
    Function
  ] = useState(false);

  let inputProps: any = { type };
  if (type === 'number') {
    inputProps = { inputMode: 'numeric' };
  }

  if (type === 'password' && canDisplayPassword) {
    inputProps = {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={() => setPasswordDisplayed(!passwordDisplayed)}
            onMouseDown={(event: any) => event.preventDefault()}
          >
            {!passwordDisplayed ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    };
  }

  const customField = {
    ...field,
    type: type === 'password' && passwordDisplayed ? 'text' : type,
    onClick: (e: any) => {
      e.stopPropagation();
      e.preventDefault();
    },
  };

  if (icon) {
    const defaultIconProps = (
      <InputAdornment position={icon.position}>
        <icon.component />
      </InputAdornment>
    );
    if (icon.position === 'start') {
      inputProps = {
        startAdornment: { defaultIconProps },
      };
    } else if (icon.position === 'end') {
      inputProps = {
        endAdornment: defaultIconProps,
      };
    }
  }

  return (
    <div className='w-full' data-testid='textfield'>
      <TextFieldComponent
        className='w-full'
        error={touched[field.name] && errors[field.name] !== undefined}
        helperText={helper}
        InputProps={inputProps}
        autoComplete='on'
        {...customField}
        {...props}
      />
      <FieldError errors={errors[field.name]} touched={touched[field.name]} />
    </div>
  );
};

TextField.defaultProps = {
  canDisplayPassword: false,
};

export default TextField;
