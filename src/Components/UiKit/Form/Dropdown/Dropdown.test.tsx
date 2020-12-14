// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import Dropdown from './Dropdown';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load dropdown component', async () => {
  renderApp(
    <Dropdown
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: '' }}
      helper="Message"
      label="Label"
      options={[]}
    />
  );

  expect(screen.getByTestId('dropdown')).toBeInTheDocument();
});
