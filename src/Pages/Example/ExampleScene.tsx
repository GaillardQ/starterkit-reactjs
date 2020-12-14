// React libs
import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Components
import Example from '../../Components/Example/Example';
// Type
import * as Types from './ExampleScene.type';

const ExampleScene: FC<Types.IProps> = () => (
  <BaseLayout className='bg-gray-900 text-white'>
    <Typography variant='h1' component='h1' data-testid='title'>
      EXAMPLE PAGE
    </Typography>
    <Example />
  </BaseLayout>
);

export default ExampleScene;
