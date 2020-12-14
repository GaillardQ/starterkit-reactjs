// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import LogguedScene from './LogguedScene';
// Utils
import { renderApp } from '../../Utils/Test';

test('Load loggued page', async () => {
  renderApp(<LogguedScene />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});
