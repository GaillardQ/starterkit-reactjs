// Misc libs
import { FC } from "react";
// @core
import type { TPageProps } from "@core/models/Page.type";
import type { Route } from "@core/models/Route.type";
import type { User } from "@core/models/User.type";

export interface IModuleNavigation {
	slug: string;
	url: string;
}

export interface IModuleRestriction {
	attribute: keyof User;
	rule: RegExp;
}

export interface IModuleRouter {
	component: FC<TPageProps>;
	context?: FC;
	name: string;
	navigation: IModuleNavigation;
	restriction?: IModuleRestriction[];
	routes: Record<string, Route>;
}