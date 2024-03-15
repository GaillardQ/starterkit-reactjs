// Misc libs
import { Outlet } from "react-router-dom";
// @core
import type { IPageProps } from "@core/models/Route.type";
// @ui
import UiElement from "@ui/components/layout/Element/UiElement";

const LayoutComponent = ({children}: IPageProps) => (
  <UiElement>
    <UiElement variant="container" className="bg-red-500">HEADER</UiElement>
      { children }
      <Outlet />
  </UiElement>
);

export default LayoutComponent;