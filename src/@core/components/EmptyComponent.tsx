// Misc libs
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const EmptyComponent = (): JSX.Element => <Fragment><Outlet /></Fragment>;

export default EmptyComponent;
