// @core
import { IDefaultComponent } from "@core/resources/types/Common.type";

export default interface IUiTypography extends IDefaultComponent{
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "default";
}