// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Button from './Button';
// Utils
import { renderApp } from '../../../Utils/Test';

test('Load button component', async () => {
  renderApp(<Button />);

  expect(screen.getByTestId('button')).toBeInTheDocument();
});
