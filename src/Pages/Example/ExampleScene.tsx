// React libs
import React, { FC } from 'react';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Components
import Example from '../../Components/Example/Example';
import Typography from '../../Components/UiKit/Typography/Typography';
// Type
import * as Types from './ExampleScene.type';

const ExampleScene: FC<Types.IProps> = () => (
  <BaseLayout>
    <Typography variant='h1' component='h1'>
      EXAMPLE PAGE
    </Typography>
    <Example />
  </BaseLayout>
);

ExampleScene.propTypes = {};

export default ExampleScene;
