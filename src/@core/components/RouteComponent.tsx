// Misc libs
import { FC, Fragment, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// @core
import NoMatchComponent from "@core/components/NoMatchComponent";
import type { IModuleRouter } from "@core/models/Module.type";
import type { Route as RouteType } from "@core/models/Route.type";

interface TProps {
	modules: Record<string, IModuleRouter>;
}

const RouterComponent: FC<TProps> = (props) => {
	// Variables
	const { modules } = props;

	// Actions
	const renderRouteGroup = (module: IModuleRouter, path: string, index: string, routes: Record<string, RouteType>): ReactElement => (
		<Fragment key={`${index}-container`}>
			{Object.keys(routes).map(key => {
				const route = routes[key];
				const newIndex = `${index}-${key}-${route.name}`;
				const newPath = `${path}/${route.path}`;
				if (!route.childs || Object.keys(route.childs).length === 0) {
					return (
						<Route
							key={newIndex}
							path={newPath}
							element={<route.component />}
						/>
					);
				} else {
					return renderRouteGroup(module, newPath, newIndex, route.childs);
				}
			})}
			<Route path={`${path}/*`} element={<Navigate to="/404" replace={true} />} />
		</Fragment>
	)

	return (
		<Routes>
			{
				Object.keys(modules).map(key => {
					const module: IModuleRouter = modules[key];
					return renderRouteGroup(module, module.navigation.url, module.name, module.routes);
				})
			}
			<Route path="*" element={<Navigate to="/404" replace={true} />} />
			<Route path="/404" element={<NoMatchComponent />} />
		</Routes>
	)
}

export default RouterComponent;