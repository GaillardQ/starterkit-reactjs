// @core
import { IDefaultComponent } from "@core/resources/types/Common.type";
// @ui
import { TSize } from "@ui/resources/type/Common.type";

export default interface IUiElement extends IDefaultComponent{
	variant?: "default" | "container" | "page";
	color?: "default" | "primary" | "secondary";
	size?: TSize;
}