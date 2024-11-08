// Misc libs
import type { FC } from 'react';
// @core
import type { Route } from '@core/misc/models/Route.type';
import type { User } from '@core/misc/models/User.type';

export interface IModuleNavigation {
	slug: string;
	url: string;
}

export interface IModuleRestriction {
	attribute: keyof User;
	rule: RegExp;
}

export interface IModuleRouter {
	context?: FC;
	name: string;
	navigation: IModuleNavigation;
	restriction?: IModuleRestriction[];
	routes: Record<string, Route>;
}
