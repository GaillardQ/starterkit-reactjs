// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Autocomplete from './Autocomplete';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load autocomplete component', async () => {
  renderApp(
    <Autocomplete
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: '' }}
      options={[]}
    />
  );

  expect(screen.getByTestId('autocomplete')).toBeInTheDocument();
});
