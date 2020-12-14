// React libs
import React, { FC } from 'react';
import moment from 'moment';
import { SnackbarProvider } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
// Components
import ErrorBoundary from '../Components/Error/ErrorBoundary';
import Router from '../Components/Router/Router';

moment.fn.toJSON = function() {
  return this.format('YYYY-MM-DD HH:mm:ss');
};

const AppScene: FC = () => {
  const notistackRef = React.createRef();
  const onClickDismiss = (key: string) => () => {
    if (notistackRef && notistackRef.current) {
      (notistackRef as any).current.closeSnackbar(key);
    }
  };
  return (
    <ErrorBoundary>
      <SnackbarProvider
        maxSnack={5}
        ref={notistackRef}
        action={(key: string) => (
          <CloseIcon onClick={onClickDismiss(key)} className='cursor-pointer' />
        )}
      >
        <Router />
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

export default AppScene;
