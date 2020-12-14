// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import RadioGroup from './RadioGroup';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load radio group component', async () => {
  renderApp(
    <RadioGroup
      form={{
        errors: [],
        touched: []
      }}
      field={{ value: '' }}
      label="Label"
      options={[]}
    />
  );

  expect(screen.getByTestId('radiogroup')).toBeInTheDocument();
});
