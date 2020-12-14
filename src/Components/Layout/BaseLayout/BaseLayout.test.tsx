// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import BaseLayout from './BaseLayout';
// Utils
import { renderApp } from '../../../Utils/Test';

test('Load base layout component', async () => {
  renderApp(<BaseLayout />);

  expect(screen.getByTestId('base-layout')).toBeInTheDocument();
});
