// @app
import PageComponent from '@app/common/components/PageComponent';
import Catalog from '@app/test/pages/beer/catalog';
import Details from '@app/test/pages/beer/details';
import Home from '@app/test/pages/home';
// @core
import type { IModuleRouter } from '@core/models/Module.type';
import { Route } from '@core/models/Route.type';

export const moduleRoute: IModuleRouter = {
    name: 'test',
    navigation: {
        slug: '/test/*',
        url: '/test'
    },
    routes: {
        Home: new Route({
            component: Home,
            module: 'test',
            name: 'home',
            path: ''
        }),
        Bieres: new Route({
            component: PageComponent,
            module: 'test',
            name: 'bieres',
            path: 'bieres',
            childs: {
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
        })
    }
};
