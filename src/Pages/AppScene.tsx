// React libs
import React, { FC, createRef, useState } from 'react';
import moment from 'moment';
import { SnackbarProvider } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
// Components
import ErrorBoundary from '../Components/Error/ErrorBoundary';
import Router from '../Components/Router/Router';
// Services
import LocalStorage from '../Network/Services/Storage/LocalStorage';
// Types
import * as AuthTypes from '../Data/Model/Auth.type';
import UserContext from '../Data/Contexts/UserContext';

moment.fn.toJSON = function() {
  return this.format('YYYY-MM-DD HH:mm:ss');
};

const AppScene: FC = () => {
  // State
  const [user, setUser]: [
    AuthTypes.IUser | undefined,
    (u: AuthTypes.IUser) => void
  ] = useState<AuthTypes.IUser | undefined>(
    LocalStorage.get(LocalStorage.keys.user) || undefined
  );

  // Handlers
  const updateUser = (user: AuthTypes.IUser) => {
    LocalStorage.set(LocalStorage.keys.user, user);
    setUser(user);
  };

  // Toasts config
  const notistackRef = createRef();
  const onClickDismiss = (key: string) => () => {
    if (notistackRef && notistackRef.current) {
      (notistackRef as any).current.closeSnackbar(key);
    }
  };

  return (
    <ErrorBoundary>
      <SnackbarProvider
        maxSnack={5}
        autoHideDuration={3000}
        ref={notistackRef}
        action={(key: string) => (
          <CloseIcon onClick={onClickDismiss(key)} className='cursor-pointer' />
        )}
      >
        <UserContext.Provider value={{ user, updateUser }}>
          <Router />
        </UserContext.Provider>
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

AppScene.propTypes = {};

export default AppScene;
