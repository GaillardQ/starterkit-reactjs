// React libs
import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Contexts
import UserContext from '../../Data/Contexts/UserContext';
// Type
import * as Types from './LogguedScene.type';

const LogguedScene: FC<Types.IProps> = () => {
  return (
    <BaseLayout>
      <Typography variant='h1' component='h1'>
        Accueil
      </Typography>
      <UserContext.Consumer>
        {({ user }) => {
          console.log('user', user);
          return (
            <Typography variant='body1' component='div'>
              Hello <span className='text-teal-500'>{user?.email}</span>
            </Typography>
          );
        }}
      </UserContext.Consumer>
    </BaseLayout>
  );
};

LogguedScene.propTypes = {};

export default LogguedScene;
