// React libs
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// Components
import BaseCard from '../../Card/BaseCard/BaseCard';
// Type
import * as Types from './BaseModale.type';

const BaseModale = forwardRef(({ content, size, title }: Types.IProps, ref) => {
  // Variables
  const sizeList = { small: 'w-1/3', medium: 'w-1/2', large: 'w-4/5' };
  return (
    <div
      className={`absolute a-center flex h-9/10 items-center ${
        sizeList[size!]
      } outline-none overflow-hidden z-1600`}
    >
      <BaseCard content={content} header={title} />
    </div>
  );
});

BaseModale.propTypes = {
  content: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

BaseModale.defaultProps = {
  size: 'medium',
};

export default BaseModale;
