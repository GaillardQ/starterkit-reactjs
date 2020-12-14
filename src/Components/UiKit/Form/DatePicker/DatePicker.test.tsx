// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import DatePicker from './DatePicker';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load datepicker component', async () => {
  renderApp(
    <DatePicker
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: null }}
      value={null}
      onChange={(...args: any) => null}
    />
  );

  expect(screen.getByTestId('datepicker')).toBeInTheDocument();
});
