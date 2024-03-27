// @core
import type { IDefaultComponent } from '@core/models/Component.type';
// @ui
import type { TColor, TSize } from '@ui/resources/type/Common.type';

export interface IUiElement extends IDefaultComponent{
	variant?: 'default' | 'container' | 'page';
  color?: TColor;
  size?: TSize;
  hasShadow?: boolean;
}
