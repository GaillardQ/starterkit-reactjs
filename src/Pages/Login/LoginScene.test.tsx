// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Login from './LoginScene';
// Utils
import { renderApp } from '../../Utils/Test';

test('Load login page', async () => {
  renderApp(<Login />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});
