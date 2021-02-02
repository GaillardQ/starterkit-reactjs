// React libs
import React, { FC } from 'react';
// Type
import * as Types from './TransparentPanel.type';

const TransparentPanel: FC<Types.IProps> = () => {
  return (
    <div className='absolute bg-selection opacity-55 left-0 h-full top-0 w-full' />
  );
};

TransparentPanel.propTypes = {};

TransparentPanel.defaultProps = {};

export default TransparentPanel;
