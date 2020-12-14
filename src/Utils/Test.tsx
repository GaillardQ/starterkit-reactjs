// React libs
import React from 'react';
import { SnackbarProvider } from 'notistack';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderApp = (Component: any) => {
  return render(
    <SnackbarProvider>
      <BrowserRouter>{Component}</BrowserRouter>
    </SnackbarProvider>
  );
};
