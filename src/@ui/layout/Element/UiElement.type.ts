import IDefaultComponent from "@core/resources/types/Default.type";

export default interface IUiElement extends IDefaultComponent{
	variant?: 'container' | 'default';
}