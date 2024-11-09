// @core
import type { IDefaultComponent } from '@core/misc/models/Component.type';

export interface IUiModal extends IDefaultComponent {
	actions?: JSX.Element[];
	handleClose: () => void;
	isOpen: boolean;
	title: JSX.Element;
}
