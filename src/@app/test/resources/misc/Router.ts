// @app
import Page1 from "@app/test/pages/page1";
import Page2 from "@app/test/pages/page2";
// @core
import EmptyComponent from "@core/components/Router/EmptyComponent";
import type { IModuleRouter } from "@core/models/Module.type";
import { Route } from "@core/models/Route.type";

export const moduleRoute: IModuleRouter = {
	component: EmptyComponent,
	name: "test",
	navigation: {
		slug: '/test/*',
		url: '/test'
	},
	routes: {
		Page1: new Route({
			component: Page1,
			name: 'page1',
			path: 'page1'
		}),
		Page2: new Route({
			component: Page2,
			name: 'page2',
			path: 'page2'
		})
	}
}