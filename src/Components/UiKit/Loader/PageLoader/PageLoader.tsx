// React libs
import React, { FC, Fragment } from 'react';
// Components
import LocalLoader from '../LocalLoader/LocalLoader';
// Type
import * as Types from './PageLoader.type';

const PageLoader: FC<Types.IProps> = ({ message }) => {
  return (
    <Fragment>
      <div className='absolute bg-gray-500 flex h-full left-0 opacity-50 top-0 w-full z-1100' />
      <div className='absolute flex h-full items-center justify-center left-0 top-0 w-full z-1100'>
        <LocalLoader message={message} type='contained' />
      </div>
    </Fragment>
  );
};

PageLoader.propTypes = {};

export default PageLoader;
