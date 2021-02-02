// React libs
import React, { FC } from 'react';
import { Typography as Typo } from '@material-ui/core';
// Type
import * as Types from './Typography.type';

const Typography: FC<Types.IProps> = ({ children, ...props }) => {
  const typoClasses = {
    caption: 'text-2xs',
    h1: 'text-2xl',
    h2: 'text-xl',
    h4: 'text-lg',
    h5: 'text-base',
    h6: 'text-sm',
  };
  return (
    <Typo {...props} classes={typoClasses}>
      {children}
    </Typo>
  );
};

export default Typography;
