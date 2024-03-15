// Misc libs
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
// @core
import type { IModuleRouter } from "@core/models/Module.type";
import type { Route as RouteType } from "@core/models/Route.type";

interface TProps {
	modules: Record<string, IModuleRouter>;
}

const RouterComponent: FC<TProps> = (props) => {
	// Variables
	const { modules } = props;

	return (
		<Routes>
			{
				Object.keys(modules).map(key => {
					const module: IModuleRouter = modules[key];
					return (
						<Route
							key={module.name}
							path={`/${module.navigation.url}`} 
							element={<module.component />}
						>
							{
								Object.keys(module.routes).map(key2 => {
									const route: RouteType = module.routes[key2];
									return (
										<Route 
											key={`${module.name}-${route.name}`}
											path={`${module.navigation.url}/${route.path}`}
											element={<route.component />}
										>
											{
												route.childs && Object.keys(route.childs).map(key3 => {
													const route2: RouteType = route.childs![key3];
													return (
														<Route 
															key={`${module.name}-${route.name}-${route2.name}`}
															path={route2.uri()}
															element={<route2.component />}
														/>
													)
												})
											}
										</Route>
									)
								})
							}
						</Route>
					);
				})
			}
		</Routes>
	)
}

export default RouterComponent;