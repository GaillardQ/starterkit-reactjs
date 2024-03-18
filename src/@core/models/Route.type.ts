// Misc libs
import type { ReactNode } from 'react';
// @core
import EmptyComponent from '@core/components/EmptyComponent';

interface IRoute {
	component: (props: IPageProps) => JSX.Element;
	name: string;
	path: string;
	module: string;
	childs?: Record<string, Route>;
	parent?: Route;
}

const matcher = /^:(.+)/;

export interface IPageProps { children?: ReactNode }

export class Route implements IRoute {
    public component!: (props: IPageProps) => JSX.Element;
    public name!: string;
    public path!: string;
    public module!: string;
    public childs?: Record<string, Route>;
    public parent?: Route;

    static Empty(): Route {
        return new Route({
            component: EmptyComponent,
            name: '',
            path: '',
            module: ''
        });
    }

    public constructor(init?: Partial<IRoute>) {
        Object.assign(this, init);

        if(this.childs) {
            const children = Object.entries(this.childs);
            if (children.length > 0) {
                for( const [name ] of children) {
                    this.childs[name].parent = this as Route;
                }
            }
        }
    }

    public uri = (params?: Record<string, unknown>) : string => {
        const path = this.pathbuilder(this);
        const url = `/${this.module}/${path}`;
        return params ? this.insertParams(url, params): url;
    };

    private pathbuilder = (route: Route) : string => {
        if( !route.parent ) {
            return route.path;
        }

        return this.pathbuilder( route.parent ) + '/' + route.path;
    };

    private insertParams = (path: string, params: Record<string, unknown>, search = ''): string => {
        const [pathBase, query = ''] = path.split('?');
        const segments = this.segmentize(pathBase);
        let constructedPath = '/' + segments.map((segment) => {
            const match = matcher.exec(segment);
            return match && Object.prototype.hasOwnProperty.call(params, match[1]) ? params[match[1]] as string : segment;
        }).join('/');

        const searchSplit = search.split('?')[1] || '';

        constructedPath = this.addQuery(constructedPath, query, searchSplit);

        return constructedPath;
    };

    private segmentize = (uri: string): string[] => uri.replace(/(^\/+|\/+$)/g, '').split('/');

    private addQuery = (pathname: string, ...query: string[]): string => {
        query = query.filter((q) => q && q.length > 0);
        return pathname + (query && query.length > 0 ? `?${query.join('&')}` : '');
    };
}
