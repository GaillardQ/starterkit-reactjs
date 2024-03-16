// Misc libs
import { Outlet } from "react-router-dom";
// @core
import PageBaseComponent from "@core/components/PageComponent";
import type { IPageProps } from "@core/models/Route.type";
// @ui
import LayoutComponent from "./LayoutComponent";

const PageComponent = ({children}: IPageProps) => (
	<PageBaseComponent>
		<LayoutComponent>
			{ children }
			<Outlet />
		</LayoutComponent>
	</PageBaseComponent>
);

export default PageComponent;