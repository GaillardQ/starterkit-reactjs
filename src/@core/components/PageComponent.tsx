// @core
import type { IPageProps } from "@core/models/Route.type";
// @ui
import UiElement from "@ui/components/layout/Element/UiElement";

const PageComponent = ({children}: IPageProps) => (
	<UiElement variant="page" className="border border-blue-500">
		{ children }
	</UiElement>
);

export default PageComponent;