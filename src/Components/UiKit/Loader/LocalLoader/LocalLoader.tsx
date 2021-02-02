// React libs
import React, { FC } from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from '../../Typography/Typography';
// Type
import * as Types from './LocalLoader.type';
// Images
import { ReactComponent as LoaderIcon } from '../../../../Resources/assets/img/common/loader.svg';

const LocalLoader: FC<Types.IProps> = ({ color, message, type }) => {
  const getContainerClasses = () => {
    switch (type) {
      case 'text': {
        return 'bg-transparent';
      }
      case 'contained': {
        return 'bg-selection ';
      }
    }
  };
  const getElementClassName = () => {
    switch (type) {
      case 'text': {
        return color === 'primary'
          ? 'text-selection-inverse'
          : 'text-selection';
      }
      case 'contained': {
        return 'text-selection-inverse';
      }
    }
  };
  return (
    <div
      className={`flex flex-col h-32 items-center justify-center rounded w-64 ${getContainerClasses()}`}
    >
      <LoaderIcon className={`fill-current ${getElementClassName()}`} />
      <Typography
        variant='h6'
        className={`mt-2 text-center ${getElementClassName()}`}
      >
        {message}
      </Typography>
    </div>
  );
};

LocalLoader.propTypes = {
  message: PropTypes.node || PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['text', 'contained']),
};

LocalLoader.defaultProps = {
  color: 'primary',
  type: 'text',
};

export default LocalLoader;
