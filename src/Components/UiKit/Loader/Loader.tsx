// React libs
import React, { FC } from 'react';
// Type
import * as Types from './Loader.type';

const Loader: FC<Types.IProps> = () => (
  <div className='h-full w-full'
    data-testid='loader'>Chargement...</div>
);

export default Loader;
