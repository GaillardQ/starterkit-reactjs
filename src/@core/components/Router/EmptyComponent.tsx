// Misc libs
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const EmptyComponent = () => <Fragment><Outlet /></Fragment>;

export default EmptyComponent;