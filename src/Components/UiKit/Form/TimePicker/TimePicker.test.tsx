// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import TimePicker from './TimePicker';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load timepicker component', async () => {
  renderApp(
    <TimePicker
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: null }}
      value={null}
      onChange={(...args: any) => null}
    />
  );

  expect(screen.getByTestId('timepicker')).toBeInTheDocument();
});
