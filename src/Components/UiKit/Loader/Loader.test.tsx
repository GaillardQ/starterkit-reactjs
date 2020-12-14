// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Loader from './Loader';
// Utils
import { renderApp } from '../../../Utils/Test';

test('Load loader component', async () => {
  renderApp(
    <Loader />
  );

  expect(screen.getByTestId('loader')).toBeInTheDocument();
});
