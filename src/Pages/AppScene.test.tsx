// React libs
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
// Components
import AppScene from './AppScene';

test('Load application', async () => {
  render(
    <BrowserRouter>
      <AppScene />
    </BrowserRouter>
  );

  expect(screen.getByTestId('title')).toBeInTheDocument();
});
