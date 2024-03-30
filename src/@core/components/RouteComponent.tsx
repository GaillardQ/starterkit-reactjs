// Misc libs
import type { FC, ReactElement } from 'react';
import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// @core
import NoMatchComponent from '@core/components/NoMatchComponent';
import type { IModuleRouter } from '@core/models/Module.type';
import type { Route as RouteType } from '@core/models/Route.type';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface TProps {
  modules: Record<string, IModuleRouter>;
  defaultRoute?: string
}

const RouterComponent: FC<TProps> = (props): JSX.Element => {
    // Variables
    const {
        defaultRoute,
        modules
    } = props;

    // Actions
    const renderRouteGroup = (module: IModuleRouter, path: string, index: string, routes: Record<string, RouteType>): ReactElement => (
        <Fragment key={ `${index}-container` }>
            { Object.keys(routes).map((key) => {
                const route = routes[key];
                const newIndex = `${index}-${key}-${route.name}`;
                const newPath = `${path}/${route.path}`;
                const ProtectedComponent = withAuthenticationRequired(route.component);
                if (!route.childs || Object.keys(route.childs).length === 0) {
                    return (
                        <Route
                            key={ newIndex }
                            path={ newPath }
                            element={ <ProtectedComponent /> }
                        />
                    );
                } else {
                    return renderRouteGroup(module, newPath, newIndex, route.childs);
                }
            }) }
            <Route path={ `${path}/*` } element={ <Navigate to="/404" replace={ true } /> } />
        </Fragment>
    );

    return (
        <Routes>
            {
                Object.keys(modules).map((key) => {
                    const module: IModuleRouter = modules[key];
                    return renderRouteGroup(module, module.navigation.url, module.name, module.routes);
                })
            }
            { defaultRoute && (<Route path="/" element={ <Navigate to={ defaultRoute } replace={ true } /> } />) }
            <Route path="*" element={ <Navigate to="/404" replace={ true } /> } />
            <Route path="/404" element={ <NoMatchComponent /> } />
        </Routes>
    );
};

export default RouterComponent;
