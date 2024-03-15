// @app
import PageComponent from "@app/common/components/PageComponent";
import Page1 from "@app/test/pages/page1";
import Page2 from "@app/test/pages/page2";
import SubPage2 from "@app/test/pages/subpage2";
// @core
import type { IModuleRouter } from "@core/models/Module.type";
import { Route } from "@core/models/Route.type";

export const moduleRoute: IModuleRouter = {
	name: "test",
	navigation: {
		slug: '/test/*',
		url: '/test'
	},
	routes: {
		Page1: new Route({
			component: Page1,
			module: 'test',
			name: 'page1',
			path: 'page1'
		}),
		Page2: new Route({
			component: PageComponent,
			module: 'test',
			name: 'page2',
			path: 'page2/:name',
			childs: {
				Home: new Route({
						module: 'test',
						name: 'home',
						path: '',
						component: Page2
				}),
				Subpage: new Route({
						module: 'test',
						name: 'subpage',
						path: 'subpage/:id',
						component: SubPage2
				}),
			}
		})
	}
}