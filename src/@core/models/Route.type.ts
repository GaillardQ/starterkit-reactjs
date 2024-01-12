// Misc libs
import {
	FC,
	Fragment
} from "react";
// @core
import type { TPageProps } from "@core/models/Page.type";

interface IRoute {
	component: FC<TPageProps>;
	name: string;
	path: string;
}

export class Route implements IRoute {
	public component!: FC<TPageProps>;
	public name!: string;
	public path!: string;

	static Empty(): Route {
		return new Route({
			component: Fragment,
			name: '',
			path: '',
		})
	}

	public constructor(init?: Partial<IRoute>) {
		Object.assign(this, init);
	}
}
