// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import TextField from './TextField';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load textfield component', async () => {
  renderApp(
    <TextField
      form={{
        errors: [],
        touched: [],
      }}
      field={{ value: '' }}
    />
  );

  expect(screen.getByTestId('textfield')).toBeInTheDocument();
});
