// React libs
import React, { FC } from 'react';
// Type
import * as Types from './BaseLayout.type';

const BaseLayout: FC<Types.IProps> = ({ children, className }) => (
  <div
    className={`flex flex-col min-h-full w-full p-4 ${className}`}
    data-testid='base-layout'
  >
    {children}
  </div>
);

BaseLayout.defaultProps = {
  className: '',
};

export default BaseLayout;
