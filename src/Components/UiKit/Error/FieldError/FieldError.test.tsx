// React libs
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Components
import FieldError from './FieldError';
// Utils
import { renderApp } from '../../../../Utils/Test';

test('Load field error component', async () => {
  renderApp(<FieldError errors="Ceci est un message d'erreur" touched={true} />);

  expect(screen.getByTestId('field-error')).toBeInTheDocument();
});
