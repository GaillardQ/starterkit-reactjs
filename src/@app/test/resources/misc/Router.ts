// @app
import Catalog from '@app/test/pages/catalog';
import Details from '@app/test/pages/details';
// @core
import type { IModuleRouter } from '@core/models/Module.type';
import { Route } from '@core/models/Route.type';

export interface ITestModuleRouter extends IModuleRouter {
  routes: {
    Catalog: Route;
    Details: Route;
  }
}

export const moduleRouter: ITestModuleRouter = {
    name: 'test',
    navigation: {
        slug: '/test/*',
        url: '/test'
    },
    routes: {
        Catalog: new Route({
            module: 'test',
            name: 'catalog',
            path: '',
            component: Catalog
        }),
        Details: new Route({
            module: 'test',
            name: 'details',
            path: 'details/:id',
            component: Details
        }),
    }
};
