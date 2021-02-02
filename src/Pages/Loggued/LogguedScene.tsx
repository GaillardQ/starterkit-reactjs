// React libs
import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Services
import LocalStorage from '../../Network/Service/Storage/LocalStorage';
// Type
import * as Types from './LogguedScene.type';

const LogguedScene: FC<Types.IProps> = () => {
  const data = LocalStorage.get('login');
  return (
    <BaseLayout>
      <Typography variant='h1' component='h1'>
        Accueil
      </Typography>
      {data && (
        <Typography variant='body1' component='div'>
          Hello <span className='text-teal-500'>{data.email}</span>
        </Typography>
      )}
    </BaseLayout>
  );
};

export default LogguedScene;
