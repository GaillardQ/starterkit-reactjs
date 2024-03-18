// @core
import type { IDefaultComponent } from '@core/models/Component.type';
// @ui
import type { TSize } from '@ui/resources/type/Common.type';

export interface IUiElement extends IDefaultComponent{
	variant?: 'default' | 'container' | 'page';
	color?: 'default' | 'primary' | 'secondary';
  size?: TSize;
}
