// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Checkbox from './Checkbox';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load checkbox component', async () => {
  renderApp(
    <Checkbox
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: true }}
    />
  );

  expect(screen.getByTestId('checkbox')).toBeInTheDocument();
});
