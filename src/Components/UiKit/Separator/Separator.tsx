// React libs
import React, { FC } from 'react';
// Type
import * as Types from './Separator.type';

const Separator: FC<Types.IProps> = ({ className, type }) => {
  const getClasses = () => {
    switch (type) {
      case 'horizontal':
        return 'h-1px w-full';
      case 'vertical':
        return 'w-1px';
    }
  };
  return <div className={`bg-gray-400 mx-1 ${getClasses()} ${className}`} />;
};

export default Separator;
