// React libs
import React, { FC } from 'react';
// Type
import * as Types from './ErrorScene.type';

const ErrorBoundary: FC<Types.IProps> = ({ match }) => {
  const code: number = parseInt(match.params.code, 10);

  const render404Page = () => {
    return <div data-testid='error'>ERREUR 404</div>;
  };
  const renderErrorPage = () => {
    return <div data-testid='error'>ERROR</div>;
  };

  return code === 404 ? render404Page() : renderErrorPage();
};

export default ErrorBoundary;
