// Misc libs
import { Fragment } from "react";
// @core
import type { IModuleRouter } from "@core/models/Module.type";
import { Route } from "@core/models/Route.type";


export const moduleRoute: IModuleRouter = {
	component: Fragment,
	name: "test",
	navigation: {
		slug: '/test/*',
		url: '/test'
	},
	routes: {
		Page1: new Route({
			component: Fragment,
			name: 'page1',
			path: 'page1'
		}),
		Page2: new Route({
			component: Fragment,
			name: 'page2',
			path: 'page2'
		})
	}
}