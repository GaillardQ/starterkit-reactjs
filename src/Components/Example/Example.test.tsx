// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Example from './Example';
// Utils
import { renderApp } from '../../Utils/Test';

test('Load example component', async () => {
  renderApp(<Example />);

  expect(screen.getByTestId('example-component')).toBeInTheDocument();
});
