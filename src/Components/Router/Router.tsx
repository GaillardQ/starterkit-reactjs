// React libs
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import moment from 'moment';
// Scenes
import ExampleScene from '../../Pages/Example/ExampleScene';
import ErrorScene from '../../Pages/Error/ErrorScene';
import LoginScene from '../../Pages/Login/LoginScene';
import LogguedScene from '../../Pages/Loggued/LogguedScene'; // example
// Services
import LocalStorage from '../../Network/Services/Storage/LocalStorage';
// Common
import Common from '../../Resources/Common';

const PrivateRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={props => {
      const now = moment().unix();
      const expirationDatetime = LocalStorage.get(
        LocalStorage.keys.expiration_datetime
      );
      return now <= expirationDatetime ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: `/${Common.Routes.routeLogin}`,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

const PublicRoute = ({ component, params, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      React.createElement(component, { ...props, ...params })
    }
  />
);

const NotFoundRoute = () => (
  <Redirect
    to={{
      pathname: `/${Common.Routes.routeError}/404`,
    }}
  />
);

const RouterComponent: FC = () => (
  <main>
    <Switch>
      {/* HOME */}
      <PublicRoute
        exact
        path={`/${Common.Routes.routeHome}`}
        component={ExampleScene}
      />
      {/* LOGIN */}
      <PublicRoute
        exact
        path={`/${Common.Routes.routeLogin}`}
        component={LoginScene}
      />
      {/* TEST */}
      <PrivateRoute
        exact
        path={`/${Common.Routes.routeLoggued}`}
        component={LogguedScene}
      />
      {/* ERRORS */}
      <PublicRoute
        path={`/${Common.Routes.routeError}/:code`}
        component={ErrorScene}
      />
      <NotFoundRoute />
    </Switch>
  </main>
);

export default RouterComponent;
