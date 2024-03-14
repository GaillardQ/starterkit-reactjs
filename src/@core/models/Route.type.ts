// @core
import EmptyComponent from "@core/components/Router/EmptyComponent";

interface IRoute {
	component: () => JSX.Element;
	name: string;
	path: string;
}

export class Route implements IRoute {
	public component!: () => JSX.Element;
	public name!: string;
	public path!: string;

	static Empty(): Route {
		return new Route({
			component: EmptyComponent,
			name: '',
			path: '',
		})
	}

	public constructor(init?: Partial<IRoute>) {
		Object.assign(this, init);
	}
}
