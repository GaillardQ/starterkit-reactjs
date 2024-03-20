// Misc libs
import { Fragment } from 'react';
// @/core
import type { IPageProps } from '@core/models/Route.type';

const EmptyComponent = ({ children }: IPageProps): JSX.Element => <Fragment>{ children }</Fragment>;

export default EmptyComponent;
