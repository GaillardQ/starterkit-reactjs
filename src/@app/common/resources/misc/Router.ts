// @app
import Home from '@app/common/page/home';
// @core
import type { IModuleRouter } from '@core/models/Module.type';
import { Route } from '@core/models/Route.type';

export interface ICommonModuleRouter extends IModuleRouter {
  routes: {
    Home: Route;
  }
}

export const moduleRouter: ICommonModuleRouter = {
    name: 'Home',
    navigation: {
        slug: '/*',
        url: ''
    },
    routes: {
        Home: new Route({
            component: Home,
            module: '',
            name: 'home',
            path: ''
        })
    }
};
