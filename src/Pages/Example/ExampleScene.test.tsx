// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Example from './ExampleScene';
// Utils
import { renderApp } from '../../Utils/Test';

test('Load Example page', async () => {
  renderApp(<Example />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});
