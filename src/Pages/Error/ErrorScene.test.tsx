// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Error from './ErrorScene';
// Utils
import { renderApp } from '../../Utils/Test';

test('Load 404 error page', async () => {
  renderApp(
    <Error classes={{}} location={{}} match={{ params: { code: 404 } }} />
  );

  expect(screen.getByTestId('error')).toBeInTheDocument();
});

test('Load 500 error page', async () => {
  renderApp(
    <Error classes={{}} location={{}} match={{ params: { code: 500 } }} />
  );

  expect(screen.getByTestId('error')).toBeInTheDocument();
});
